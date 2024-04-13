import { useQuery } from '@tanstack/react-query';
import statisticsApis from '../api/statistics';

const useGetBarCharData = params => {


const { data, isError, isLoading } = useQuery({
    queryKey: ['all-stats', params],
    queryFn: () => statisticsApis.getAllStats({ queryKey: ['all-stats', params] }),
    options: {
      cacheTime: 0,
      staleTime: 0,
    },
  });

  const statsData = data?.data.admins;
 

  return {
    users: statsData,
    isError,
    isLoading,
  };
};

export default useGetBarCharData;
