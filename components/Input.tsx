import {
  ChevronDown,
  ChevronUp,
  ListFilter,
  Search,
  X,
} from "lucide-react-native";
import { useRef, useState } from "react";
import {
  Animated,
  LayoutAnimation,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const categories = ["Student Essentials", "Gadgets", "Personal Belongings"];
const locations = [
  "Library",
  "Cafeteria",
  "Admin Office",
  "Entrance Hallway",
  "COT Building",
  "CITC Building",
  "CEA Building",
  "Culinary Building",
  "CSM Building",
  "Inside Gym",
  "Gym Lobby",
];

export default function SearchWithToggle() {
  const [query, setQuery] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const [categoryExpanded, setCategoryExpanded] = useState(false);
  const [locationExpanded, setLocationExpanded] = useState(false);
  const [categorySearch, setCategorySearch] = useState("");
  const [locationSearch, setLocationSearch] = useState("");

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const toggleFilter = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Animated.timing(rotateAnim, {
      toValue: filterVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setFilterVisible(!filterVisible);
  };

  const toggleWithLayout = (toggleFn: () => void) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    toggleFn();
  };

  const rotation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const InputDropdown = ({
    label,
    value,
    expanded,
    onToggle,
    options,
    onSelect,
  }: {
    label: string;
    value: string;
    expanded: boolean;
    onToggle: () => void;
    options: string[];
    onSelect: (val: string) => void;
  }) => (
    <View>
      <Text className="text-sm font-manrope-semibold text-gray-700 mb-3">
        {label}
      </Text>

      <View className="relative">
        <TouchableOpacity
          onPress={() => toggleWithLayout(onToggle)}
          className="flex-row items-center bg-white/30 border border-gray-300 rounded-md px-3 h-[3.5rem] backdrop-blur-md"
          activeOpacity={0.8}
        >
          <Text className="flex-1 text-base font-manrope text-gray-800 tracking-tight">
            {value || `Select ${label.toLowerCase()}`}
          </Text>
          {value && (
            <Pressable
              className="mr-2"
              onPress={() => onSelect("")}
              hitSlop={30}
            >
              <X className="size-13 mr-3" />
            </Pressable>
          )}
          {expanded ? (
            <ChevronUp size={20} color="#4B5563" />
          ) : (
            <ChevronDown size={20} color="#4B5563" />
          )}
        </TouchableOpacity>
      </View>

      {expanded && (
        <View
          className="bg-white/90 border border-gray-200 rounded-md mt-1"
          style={{ maxHeight: 200 }}
        >
          <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
            {options.map((opt) => (
              <TouchableOpacity
                key={opt}
                className="px-4 py-2"
                onPress={() =>
                  toggleWithLayout(() => {
                    onSelect(opt);
                    onToggle();
                  })
                }
              >
                <Text className="text-base text-gray-800 py-1 font-manrope">
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );

  return (
    <View className="w-full">
      {/* Search Row */}
      <View className="flex-row items-center gap-2">
        <View className="flex-[4] bg-gray-100 border border-zinc-300 rounded-lg px-3 h-[3.5rem] flex-row items-center">
          <Search size={16} className="text-gray-500 mr-1" />
          <TextInput
            className="flex-1 text-gray-800 text-[13px] ml-1 font-manrope"
            placeholder="Search an item"
            value={query}
            onChangeText={setQuery}
            placeholderTextColor="#6B7280"
          />
        </View>

        <TouchableOpacity className="flex-1 bg-teal-500 rounded-lg w-full h-[3.5rem] items-center justify-center px-3">
          <Text className="text-white font-semibold text-sm font-manrope-semibold">
            Search
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-slate-900 rounded-lg size-[3.5rem] items-center justify-center"
          onPress={toggleFilter}
        >
          <Animated.View style={{ transform: [{ rotate: rotation }] }}>
            <ListFilter size={24} color="#fff" />
          </Animated.View>
        </TouchableOpacity>
      </View>

      {/* Filter Section */}
      {filterVisible && (
        <View className="mt-4 space-y-4">
          <InputDropdown
            label="Item Category"
            value={categorySearch}
            expanded={categoryExpanded}
            onToggle={() => setCategoryExpanded(!categoryExpanded)}
            options={categories}
            onSelect={setCategorySearch}
          />

          <View>
            <Text className="text-sm font-manrope-semibold text-gray-700 mb-1 mt-3">
              Description
            </Text>
            <TextInput
              className="bg-white/30 border font-manrope border-gray-300 rounded-md h-[3.5rem] px-3 mb-3 text-[13px] text-zinc-800 backdrop-blur-md tracking-tight"
              placeholder="Enter description"
              placeholderTextColor="#9CA3AF"
            />
          </View>

          <InputDropdown
            label="Last Location"
            value={locationSearch}
            expanded={locationExpanded}
            onToggle={() => setLocationExpanded(!locationExpanded)}
            options={locations}
            onSelect={setLocationSearch}
          />
        </View>
      )}
    </View>
  );
}
