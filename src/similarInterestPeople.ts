type InterestArea = {
  id: number;
  name: string;
}

const BACKEND: InterestArea = {
  id: 1,
  name: "Backend"
}

const FRONTEND: InterestArea = {
  id: 2,
  name: "Frontend"
}

const DEV_OPS: InterestArea = {
  id: 3,
  name: "DevOps"
}

const interestAreas: InterestArea[] = [BACKEND, FRONTEND, DEV_OPS];

type User = {
  id: number;
  name: string;
  interestAreaIds: Number[];
};

const user1: User = {
  id: 1,
  name: "Jorge",
  interestAreaIds: [BACKEND.id, DEV_OPS.id]
};

const user2: User = {
  id: 2,
  name: "Luana",
  interestAreaIds: [BACKEND.id]
};

const user3: User = {
  id: 3,
  name: "José",
  interestAreaIds: [DEV_OPS.id]
};

const users: User[] = [user1, user2, user3];

type VertexAssociation = {
  interestArea: InterestArea;
  users: User[];
};

type Graph = VertexAssociation[];

const graph: Graph = [];

interestAreas.forEach((interestArea) => {
  const vertexAssociation: VertexAssociation = {
    interestArea,
    users: []
  };

  users.forEach((user) => {
    if(user.interestAreaIds.includes(interestArea.id)){
      vertexAssociation.users.push(user);
    }
  });

  graph.push(vertexAssociation);
});


function showUsersWithSameInsterestingArea(user: User){
  const usersWithSimilarInterestings = getUsersWithSimilarInterestings(user);

  console.log("Usuários que possuem áreas similares as de ", user.name);
  console.log(usersWithSimilarInterestings);
}

function getUsersWithSimilarInterestings(user: User){
  let usersWithSimilarInterestings: User[] = []; 

  graph.forEach((vertexAssociation) => {
    const vertexAssociationInterestingAreaId = vertexAssociation.interestArea.id;

    if(user.interestAreaIds.includes(vertexAssociationInterestingAreaId)){
      usersWithSimilarInterestings.push(...vertexAssociation.users);
    };
  });

  usersWithSimilarInterestings = usersWithSimilarInterestings.filter(
    (userWithSimiliarInsteresting) => userWithSimiliarInsteresting.id !== user.id
  );

  return usersWithSimilarInterestings;
}


console.log("Grafo Gerado:")
graph.forEach((vertexAssociation) => {
  console.log("Área de Interesse: ", vertexAssociation.interestArea.name);
  console.log("Usuários: ", vertexAssociation.users);
  console.log("\n");
});

showUsersWithSameInsterestingArea(user1);