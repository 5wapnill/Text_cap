async function fetchRepositoryContents(owner, repo) {
    try {
      const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents`);
      if (!response.ok) {
        throw new Error(`Failed to fetch repository contents: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  
  // Usage example:
  const owner = "5wapnilmore";
  const repo = "Anywhere";
  
  fetchRepositoryContents(owner, repo)
    .then(contents => {
      // Process the contents here
      console.log(contents);
    })
    .catch(error => {
      console.error(error);
    });