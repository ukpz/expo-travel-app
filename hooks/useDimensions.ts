import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { useDispatch } from 'react-redux';
import { setDimensions } from '../store/appSlice';

export const useDimensions = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Set initial dimensions
    const { width, height } = Dimensions.get('window');
    dispatch(setDimensions({ width, height }));

    // Listen for dimension changes (e.g., device rotation)
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      dispatch(setDimensions({ width: window.width, height: window.height }));
    });

    // Cleanup listener on unmount
    return () => subscription?.remove();
  }, [dispatch]);
};