import { useContext } from 'react';
import { HotelsContext } from '../contexts/contexts';

// A custom hook that allows child components inside provider to use the context by this reference rather than individually establishing connection to context.
const useHotel = () => {
  return useContext(HotelsContext);
};

export default useHotel;
