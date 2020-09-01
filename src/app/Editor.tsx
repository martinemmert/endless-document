import React from "react";

type DocumentNode = {
  id: string;
  content: string;
};

const useDocumentNodes = () => {
  const [documentNodeCounter, setDocumentNodeCounter] = React.useState<number>(0);
  const [documentNodes] = React.useState<Map<string, DocumentNode>>(new Map());
  return {
    get values() {
      // eslint-disable-next-line unicorn/prefer-spread
      return Array.from(documentNodes.values());
    },
    create: () => {
      const node = { id: `node-${documentNodeCounter}`, content: "" };
      setDocumentNodeCounter(documentNodeCounter + 1);
      documentNodes.set(node.id, node);
      return node;
    },
    remove: (id) => {
      documentNodes.delete(id);
    },
  };
};

export const Editor = () => {
  const newNodeInputReference = React.useRef<HTMLInputElement | null>(null);

  const documentNodes = useDocumentNodes();
  const [currentNode, setCurrentNode] = React.useState<DocumentNode | null>(null);

  const createNewNode = () => setCurrentNode(documentNodes.create());
  const deleteNode = (id) => documentNodes.remove(id);

  React.useEffect(() => {
    if (currentNode !== null && newNodeInputReference.current !== null) {
      newNodeInputReference.current.focus();
    }
  }, [currentNode]);

  return (
    <div>
      <div data-testid="root-document-node">
        <ul className="list-disc list-inside">
          {documentNodes.values.map((value) => {
            if (currentNode !== null && value.id === currentNode.id) {
              return (
                <li data-testid="new-document-node" key={currentNode.id}>
                  <input
                    ref={newNodeInputReference}
                    data-testid="new-document-node-input"
                    defaultValue={currentNode.content}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        createNewNode();
                        event.preventDefault();
                      }
                      if (event.key === "Escape") {
                        setCurrentNode(null);
                        event.preventDefault();
                      }
                    }}
                    onBlur={() => {
                      setCurrentNode(null);
                    }}
                    onChange={(event) => {
                      currentNode.content = event.target.value;
                    }}
                  />
                </li>
              );
            }
            // TODO: implement navigation via keyboard to solve accessibility warnings
            /* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
            /* eslint-disable jsx-a11y/click-events-have-key-events */
            return (
              <li
                data-testid="document-node"
                className="block"
                key={value.id}
                onClick={(event) => {
                  setCurrentNode(value);
                  event.preventDefault();
                }}
              >
                <span>{value.content}</span>
                <button
                  type="button"
                  aria-label={`Delete bullet point ${value.content}`}
                  onClick={(event) => {
                    deleteNode(value.id);
                    event.preventDefault();
                  }}
                >
                  delete
                </button>
              </li>
            );
            /* eslint-enable jsx-a11y/no-noninteractive-element-interactions */
            /* eslint-enable jsx-a11y/click-events-have-key-events */
          })}
        </ul>
      </div>
      <button data-testid="add-document-node-button" onClick={createNewNode}>
        Add
      </button>
    </div>
  );
};
