import { Connection, Edge } from "react-flow-renderer";
import { TemplateNodeData } from "../../templateEditor/TemplateEditorView/TemplateEditorView.utils";

export type FindEdgeCycleOptions = {
  edges: Edge<TemplateNodeData>[];
  connection: Connection;
};

const searchEdgeCycle = (
  source: string,
  targets: string[],
  edges: Edge<TemplateNodeData>[]
): boolean => {
  const targetEdges = edges.filter((edge) => targets.includes(edge.source));
  if (targetEdges.length === 0) return false;

  const targetEdgesIds = targetEdges.map((edge) => edge.id);
  const targetSources = targetEdges.map((edge) => edge.target);
  const newEdges = edges.filter((edge) => !targetEdgesIds.includes(edge.id));

  if (targetSources.includes(source)) return true;

  return searchEdgeCycle(source, targetSources, newEdges);
};

export const isEdgeCycle = ({
  connection,
  edges,
}: FindEdgeCycleOptions): boolean => {
  if (!connection.source || !connection.target) return false;
  return searchEdgeCycle(connection.source, [connection.target], edges);
};

export const isExistingConnection = ({
  connection,
  edges,
}: FindEdgeCycleOptions): boolean =>
  edges.some(
    (edge) =>
      edge.source === connection.source &&
      edge.target === connection.target &&
      edge.targetHandle === connection.targetHandle &&
      edge.sourceHandle === connection.sourceHandle
  );
