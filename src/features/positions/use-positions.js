import { useSelector } from 'react-redux';
import { selectFilters } from '../filter/filter-slice';
import { selectVisiblePositions } from './position-slice';

export const usePositions = () => {
   const filters = useSelector(selectFilters);
   const positions = useSelector((state) =>
      selectVisiblePositions(state, filters)
   );

   return positions;
};
