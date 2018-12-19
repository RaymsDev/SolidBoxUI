import { Client } from "../../../models/Client";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";

export const CLIENTS: Client[] = [
  {
    id: 2,
    name: "Neos-SDI",
    userId: 2,
    links: [
      {
        rel: "ClientProjects",
        url: "/API/Projects?$filter=ClientId eq 2",
        method: "GET"
      }
    ]
  },
  {
    id: 3,
    name: "Stelia Aerospace",
    userId: 2,
    links: [
      {
        rel: "ClientProjects",
        url: "/API/Projects?$filter=ClientId eq 3",
        method: "GET"
      }
    ]
  },
  {
    id: 4,
    name: "Foo Bar",
    userId: 2,
    links: [
      {
        rel: "ClientProjects",
        url: "/API/Projects?$filter=ClientId eq 4",
        method: "GET"
      }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Solid Box API",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 1",
        method: "GET"
      },
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 1",
        method: "GET"
      }
    ]
  },
  {
    id: 6,
    name: "Solid Box Front React",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 3,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: []
  },
  {
    id: 7,
    name: "API de base",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: 1,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectParent",
        url: "/API/Projects/1",
        method: "GET"
      },
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 7",
        method: "GET"
      }
    ]
  },
  {
    id: 8,
    name: "Gestion de la sécurité",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: null,
    parentProjectId: 1,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectParent",
        url: "/API/Projects/1",
        method: "GET"
      },
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 8",
        method: "GET"
      }
    ]
  },
  {
    id: 9,
    name: "Demat 3X",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: 2,
    parentProjectId: null,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 9",
        method: "GET"
      }
    ]
  },
  {
    id: 10,
    name: "Lot 4",
    startDate: null,
    endDate: null,
    projectStatutId: 1,
    projectModeId: 1,
    clientId: 2,
    parentProjectId: 9,
    sortOrder: null,
    comment: null,
    enableOverRun: null,
    updateDate: null,
    amount: null,
    teamId: 1,
    branchId: 1,
    agencyId: 1,
    ownerUserId: 2,
    consumedLoad: 0,
    plannedLoad: 0,
    totalLoad: 0,
    links: [
      {
        rel: "ProjectParent",
        url: "/API/Projects/9",
        method: "GET"
      },
      {
        rel: "ProjectChildren",
        url: "/API/Projects?$filter=ParentProjectId eq 10",
        method: "GET"
      }
    ]
  }
];

export const TASKS: Task[] = [
  {
    id: 1,
    name: "Etude",
    projectId: 8,
    taskTypeId: 1,
    load: 10,
    realizedPercentage: null,
    sortOrder: null,
    links: [
      {
        rel: "TaskProjectParent",
        url: "/API/Projects/8",
        method: "GET"
      }
    ]
  },
  {
    id: 2,
    name: "DEV",
    projectId: 8,
    taskTypeId: 1,
    load: 10,
    realizedPercentage: null,
    sortOrder: null,
    links: [
      {
        rel: "TaskProjectParent",
        url: "/API/Projects/8",
        method: "GET"
      }
    ]
  },
  {
    id: 3,
    name: "Brique Projet",
    projectId: 7,
    taskTypeId: 1,
    load: 5,
    realizedPercentage: 50,
    sortOrder: null,
    links: [
      {
        rel: "TaskProjectParent",
        url: "/API/Projects/7",
        method: "GET"
      }
    ]
  },
  {
    id: 4,
    name: "Pipe line deploiement",
    projectId: 1,
    taskTypeId: 1,
    load: 2,
    realizedPercentage: 25,
    sortOrder: null,
    links: [
      {
        rel: "TaskProjectParent",
        url: "/API/Projects/1",
        method: "GET"
      }
    ]
  },
  {
    id: 5,
    name: "Développeur Junior",
    projectId: 10,
    taskTypeId: 1,
    load: 10,
    realizedPercentage: null,
    sortOrder: null,
    links: [
      {
        rel: "TaskProjectParent",
        url: "/API/Projects/10",
        method: "GET"
      }
    ]
  },
  {
    id: 6,
    name: "Développeur Senior",
    projectId: 10,
    taskTypeId: 1,
    load: 20,
    realizedPercentage: null,
    sortOrder: null,
    links: [
      {
        rel: "TaskProjectParent",
        url: "/API/Projects/10",
        method: "GET"
      }
    ]
  }
];
