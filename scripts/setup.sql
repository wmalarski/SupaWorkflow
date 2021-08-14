DROP TABLE IF EXISTS message
DROP TABLE IF EXISTS replicache_client
DROP SEQUENCE IF EXISTS version

-- Stores chat messages    
CREATE TABLE message (      
    id VARCHAR(21) PRIMARY KEY NOT NULL,      
    sender VARCHAR(255) NOT NULL,      
    content TEXT NOT NULL,      
    ord BIGINT NOT NULL,      
    version BIGINT NOT NULL
)

-- Stores last mutation ID for each Replicache client    
CREATE TABLE replicache_client (
    id VARCHAR(36) PRIMARY KEY NOT NULL,      
    last_mutation_id BIGINT NOT NULL
)

-- Will be used for computing diffs for pull response    
CREATE SEQUENCE version