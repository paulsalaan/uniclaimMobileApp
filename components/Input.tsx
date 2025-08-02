import { useState, useEffect } from 'react'
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  LayoutAnimation,
  Platform,
  UIManager,
} from 'react-native'
import { Search, Menu, ChevronUp, ChevronDown } from 'lucide-react-native'

if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true)
}

export default function SearchWithToggle() {
  const [query, setQuery] = useState('')
  const [filterVisible, setFilterVisible] = useState(false)
  const [categoryExpanded, setCategoryExpanded] = useState(false)
  const [categorySearch, setCategorySearch] = useState('')
  const [locationExpanded, setLocationExpanded] = useState(false)
  const [locationSearch, setLocationSearch] = useState('')

  // Auto-close dropdowns after 5s
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>
    if (categoryExpanded || locationExpanded) {
      timer = setTimeout(() => {
        setCategoryExpanded(false)
        setLocationExpanded(false)
      }, 5000)
    }
    return () => clearTimeout(timer)
  }, [categoryExpanded, locationExpanded])

  const toggleFilter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setFilterVisible((prev) => !prev)
  }

  const toggleCategory = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setCategoryExpanded((prev) => !prev)
  }

  const toggleLocation = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setLocationExpanded((prev) => !prev)
  }

  const handleCategorySelect = (category: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setCategorySearch(category)
    setCategoryExpanded(false)
  }

  const handleLocationSelect = (location: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setLocationSearch(location)
    setLocationExpanded(false)
  }

  return (
    <View className="w-full px-4">
      {/* Top search bar */}
      <View className="flex-row items-center gap-1">
        <View className="flex-[4] bg-gray-100 rounded-lg px-2 h-12 flex-row items-center">
          <Search className="text-gray-500 mr-1" size={16} />
          <TextInput
            className="flex-1 text-gray-800 text-[13px] leading-tight"
            placeholder="Search an item"
            value={query}
            onChangeText={setQuery}
            placeholderTextColor="#6B7280"
          />
        </View>

        <TouchableOpacity className="flex-[1.2] bg-teal-500 rounded-lg h-12 items-center justify-center px-3">
          <Text className="text-white font-semibold text-sm">Search</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-slate-900 rounded-lg h-12 w-12 items-center justify-center"
          onPress={toggleFilter}
        >
          <Menu size={20} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Filter options panel */}
      {filterVisible && (
        <View className="mt-4 space-y-4">
          {/* Item Category */}
          <View className="mt-2">
            <Text className="text-sm font-semibold text-gray-700 mb-1">Item Category</Text>
            <View className="flex-row items-center bg-white/30 border border-gray-300 rounded-xl px-3 h-10 backdrop-blur-md">
              <TextInput
                className="flex-1 text-[13px] text-gray-800 tracking-tight"
                placeholder="Search category"
                placeholderTextColor="#9CA3AF"
                value={categorySearch}
                onChangeText={setCategorySearch}
              />
              <TouchableOpacity className="pl-2" onPress={toggleCategory}>
                {categoryExpanded ? (
                  <ChevronUp size={20} color="#4B5563" />
                ) : (
                  <ChevronDown size={20} color="#4B5563" />
                )}
              </TouchableOpacity>
            </View>

            {categoryExpanded && (
              <View className="bg-white/90 border border-gray-200 rounded-xl mt-1 shadow-md backdrop-blur-md">
                {['Electronics', 'Clothing', 'Documents'].map((cat) => (
                  <TouchableOpacity
                    key={cat}
                    className="px-4 py-2"
                    onPress={() => handleCategorySelect(cat)}
                  >
                    <Text className="text-[13px] text-gray-800">{cat}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          {/* Description input */}
          <View className="mt-2">
            <Text className="text-sm font-semibold text-gray-700 mb-1">Description</Text>
            <TextInput
              className="bg-white/30 border border-gray-300 rounded-xl px-4 py-2 text-[13px] text-gray-800 backdrop-blur-md tracking-tight"
              placeholder="Enter description"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          {/* Last known location */}
          <View className="mt-2">
            <Text className="text-sm font-semibold text-gray-700 mb-1">Last Location</Text>
            <View className="flex-row items-center bg-white/30 border border-gray-300 rounded-xl px-3 h-10 backdrop-blur-md">
              <TextInput
                className="flex-1 text-[13px] text-gray-800 tracking-tight"
                placeholder="Enter last known location"
                placeholderTextColor="#9CA3AF"
                value={locationSearch}
                onChangeText={setLocationSearch}
              />
              <TouchableOpacity className="pl-2" onPress={toggleLocation}>
                {locationExpanded ? (
                  <ChevronUp size={20} color="#4B5563" />
                ) : (
                  <ChevronDown size={20} color="#4B5563" />
                )}
              </TouchableOpacity>
            </View>

            {locationExpanded && (
              <View className="bg-white/90 border border-gray-200 rounded-xl mt-1 shadow-md backdrop-blur-md">
                {['Library', 'Cafeteria', 'Gym'].map((loc) => (
                  <TouchableOpacity
                    key={loc}
                    className="px-4 py-2"
                    onPress={() => handleLocationSelect(loc)}
                  >
                    <Text className="text-[13px] text-gray-800">{loc}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  )
}
