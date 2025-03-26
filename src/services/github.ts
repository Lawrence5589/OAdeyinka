import axios from 'axios';

const GITHUB_API_BASE_URL = 'https://api.github.com';
const USERNAME = 'Lawrence5589';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
  topics: string[];
}

export const githubService = {
  async getRepositories(): Promise<GitHubRepo[]> {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/users/${USERNAME}/repos`);
      return response.data;
    } catch (error) {
      console.error('Error fetching GitHub repositories:', error);
      throw error;
    }
  },

  async getRepositoryDetails(repoName: string): Promise<GitHubRepo> {
    try {
      const response = await axios.get(`${GITHUB_API_BASE_URL}/repos/${USERNAME}/${repoName}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching repository details:', error);
      throw error;
    }
  }
}; 