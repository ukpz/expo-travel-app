// import React from 'react';
import { RootState } from '@/store';
import { useRouter } from 'expo-router';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useSelector } from 'react-redux';

const categories = [
  { id: 1, name: 'Transfer', icon: require('@/assets/categories/car.png'), href: '/transfer', bg: 'bg-blue-50' },
  { id: 5, name: 'Tour & Activities', icon: require('@/assets/categories/activities.png'), href: '/', bg: 'bg-pink-50' },
  { id: 4, name: 'Flight', icon: require('@/assets/categories/flight.png'), href: '/', bg: 'bg-sky-50' },
  { id: 2, name: 'Airport Transfer', icon: require('@/assets/categories/airport-transfer.png'), href: '/', bg: 'bg-yellow-50' },
  { id: 3, name: 'Car Rental', icon: require('@/assets/categories/car-rent.png'), href: '/', bg: 'bg-green-50' },
  { id: 6, name: 'Hotels', icon: require('@/assets/categories/hotel.png'), href: '/', bg: 'bg-purple-50' },
  { id: 7, name: 'Ferries', icon: require('@/assets/categories/boat.png'), href: '/', bg: 'bg-indigo-50' },
];

export default function CategorySlider() {
  const router = useRouter();
  const { width, height } = useSelector((state:RootState) => state.app.dimension); 

  return (
    <View className="p-4">
      <Text className="text-lg font-semibold mb-3">Explore Categories</Text>
      <Text>Screen Width: {width}px</Text>
      <Text>Screen Height: {height}px</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row space-x-3"
      >
        {categories.map(({ id, name, icon, href, bg }) => (
          <TouchableOpacity
            key={id}
            onPress={() => router.push(href as any)}
            className={`snap-start w-28 h-28 ${bg} rounded-xl flex-shrink-0 flex flex-col items-center justify-center text-sm text-gray-800
              transition-transform active:scale-95 duration-200 ease-in-out`}
            activeOpacity={0.8}
          >
            <Image source={icon} className="w-8 h-8 mb-3" />
            <Text className="text-center leading-tight text-gray-800 text-sm">{name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
