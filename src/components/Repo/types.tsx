export interface IRepoLanguages {
  node: {
    name: string,
    color: string
  },
  size: number
}
export interface IRepoTopics {
  node: {
    topic: {
      name: string
    }
    url: string
  }
}
export interface IRepo {
  node: {
    createdAt: string,
    id: string,
    name: string,
    url: string,
    isArchived: string,
    homepageUrl: string,
    openGraphImageUrl: string,
    languages: {
      edges: IRepoLanguages[]
    },
    repositoryTopics: {
      edges: IRepoTopics[]
    },
  }
}
export interface IRepositories {
  user: {
    repositories: {
      edges: IRepo[]
    }
  }
}