import axios from 'axios';
import {
  Text,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import { CatFactCard } from './src/components';
import { main_styles } from './src/styles/pages_styles'

const baseUrl = 'https://cat-fact.herokuapp.com'

function App() {
  const [loading, handleLoading] = useState(false);
  const [catFactList, handleCatFactList] = useState(null)

  function fetchData() {
    handleLoading(true);
    wait(3000).then(() => {
      axios.get(baseUrl, {
        params:{
          animal_type: 'cat',
        }
      }).then((response) => {
        handleCatFactList(response.data);
        handleLoading(false);
      });
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!restaurantData) {
    return (
      <SafeAreaView style={main_styles.center}>
        <ActivityIndicator />
        <Text>Loading restaurant...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={main_styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={() => fetchData()} />
        }>
        <CatFactCard data={catFactList} />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
