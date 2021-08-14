const resolveSequence = (tasks: Promise<void>[]): Promise<void> =>
  tasks.reduce((promise, task) => promise.then(() => task), Promise.resolve());

export default resolveSequence;
