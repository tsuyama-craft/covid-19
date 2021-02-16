export const listSampleAppsyncTables = `query listSampleAppsyncTables($group: String) {
    listSampleAppsyncTables(
      limit: 1000000
      filter: {
        group: {eq:$group}
      }
    )
    {
      items 
      {
        group
        path
      }
    }
  }
  `;