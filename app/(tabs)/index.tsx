import { Image, Text, View } from 'react-native';

import CategorySlider from '@/components/home/CategorySlider';
import { RootState } from '@/store';
// import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

export default function HomeScreen() {
  const { width, height } = useSelector((state: RootState) => state.app.dimension);

  return (
    <View className='flex-1 bg-white'>
      <View className='bg-cyan-100'>
        <SafeAreaView>
          <View className=" flex-row justify-between items-center p-4 ">
            <View>
              <Text className="text-2xl font-bold text-black dark:text-black">Hello Kate!</Text>
              <Text className="text-lg text-gray-500 dark:text-gray-400">You have a new message!</Text>
            </View>
              <Image
                source={require('../../assets/images/avatar.jpg')}
                className='size-16 rounded-full p-0 '
              />
          </View>
          <CategorySlider />
        </SafeAreaView>
      </View>
    </View>
  );
}
