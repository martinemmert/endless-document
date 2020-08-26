import React from "react";

export const Editor = () => {
  const newNodeInputReference = React.useRef<HTMLInputElement>();
  const [newNode, setNewNode] = React.useState(false);

  React.useEffect(() => {
    if (newNode && newNodeInputReference.current) {
      newNodeInputReference.current.focus();
    }
  }, [newNode]);

  return (
    <div>
      <div data-testid="root-document-node">
        {newNode && (
          <li data-testid="new-document-node">
            <input ref={newNodeInputReference} data-testid="new-document-node-input" />
          </li>
        )}
      </div>
      <button data-testid="add-document-node-button" onClick={() => setNewNode(true)}>
        Add
      </button>
    </div>
  );
};
