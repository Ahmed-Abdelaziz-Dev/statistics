import axios from './axios-instance';

const statisticsEndpoints = {
  allStats: '/stats',
};

const statisticsApis = {
  getAllStats({ queryKey: [, params] }) {
    return axios.post(statisticsEndpoints.allStats, { params });
  },
  
};

export default statisticsApis;
