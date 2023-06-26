enum EDUCATION_LEVEL {
  NONE = 0,
  FUNDAMENTAL = 1,
  HIGH = 2,
  UNIVERSITY = 3 
}

type Vertex = {
  id: number;
  name: string;
  educationLevel: EDUCATION_LEVEL;
}

const vertex1: Vertex = {
  id: 1,
  name: "Jorge",
  educationLevel: EDUCATION_LEVEL.UNIVERSITY,
}

const vertex2: Vertex = {
  id: 2,
  name: "Luana",
  educationLevel: EDUCATION_LEVEL.HIGH,
}

const vertex3: Vertex = {
  id: 3,
  name: "Maria",
  educationLevel: EDUCATION_LEVEL.NONE,
}

const vertexMatrix = [];

const vertices: Vertex[] = [
  vertex1,
  vertex2,
  vertex3
];

type VertextAssociation = {
  vertex: Vertex;
  edges: number[];
};

const graph: VertextAssociation[] = [];

vertices.forEach((vertex) => {
  if(vertex.educationLevel === EDUCATION_LEVEL.NONE){
    graph.push({ vertex, edges: [0, 0, 0] });
    return;
  }

  if(vertex.educationLevel === EDUCATION_LEVEL.FUNDAMENTAL){
    graph.push({ vertex, edges: [1, 0, 0] });
    return;
  }

  if(vertex.educationLevel === EDUCATION_LEVEL.HIGH){
    graph.push({ vertex, edges: [1, 2, 0] });
    return;
  }

  if(vertex.educationLevel === EDUCATION_LEVEL.UNIVERSITY){
    graph.push({ vertex, edges: [1, 2, 3] });
    return;
  }
});

function calculateDistanceFromUsers(vertex: Vertex){
  const receivedVertexHeaviestEdge = getVertexHeaviestEdge(vertex);

  vertices.forEach((grpahVertex) => {
    if(grpahVertex.id !== vertex.id){
      const grpahVertexHeaviestEdge = getVertexHeaviestEdge(grpahVertex);
      const distanceFromReceivedVertex = receivedVertexHeaviestEdge - grpahVertexHeaviestEdge;
      
      console.log(`A Distância de ${vertex.name} para ${grpahVertex.name} é de`, distanceFromReceivedVertex);
    }
  });
}

function getVertexHeaviestEdge(vertex: Vertex){
  const edges = getVertexEdges(vertex.id);
  
  let heaviestEdge = 0;

  for (let index = 0; index < edges.length; index++) {
    if(edges[index] == 0){
      break;
    }

    heaviestEdge = edges[index];
  };

  return heaviestEdge;
}

function getVertexEdges(vertexId: number){
  const vertex = graph.find((grpahVertex) => grpahVertex.vertex.id === vertexId);
  
  if(!vertex){
    throw new Error("Vértice não encontrado")
  }

  return vertex.edges;
}

calculateDistanceFromUsers(vertex1);