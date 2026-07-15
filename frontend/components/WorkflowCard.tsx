type Props = {
  data: any;
};

export default function WorkflowCard({ data }: Props) {
  if (!data) return null;

  return (
    <div className="summary">
      <h2>Workflow Summary</h2>

      <div className="grid">
        <div>
          <h3>Name</h3>
          <p>{data.workflow_name}</p>
        </div>

        <div>
          <h3>Trigger</h3>
          <p>{data.trigger}</p>
        </div>

        <div>
          <h3>Complexity</h3>
          <p>{data.complexity}</p>
        </div>
      </div>

      <h3>Actions</h3>
      <ul>
        {(data.actions ?? []).map((action: string) => (
          <li key={action}>✅ {action}</li>
        ))}
      </ul>

      <h3>Connectors</h3>
      <ul>
        {(data.connectors ?? []).map((connector: string) => (
          <li key={connector}>🔌 {connector}</li>
        ))}
      </ul>

      <h3>Recommendations</h3>
      <ul>
        {(data.recommendations ?? []).map((rec: string) => (
          <li key={rec}>💡 {rec}</li>
        ))}
      </ul>
    </div>
  );
}