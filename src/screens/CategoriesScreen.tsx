
// import { FlatList } from 'react-native';
// import { Categories } from '../model/data/dummyData';

// import IItemCategory from '../model/interfaces/IItemCategory';

// const CategoriesScreen = ({ Navigation }) => {
//     const handlePress = (id: string) => {
//         Navigation.navigate('Details', {
//             categoryId: id,
//         });
//     }

//     const renderCategoryItem = (category: { item: any }) => {
//         return (
//             <IItemCategory
//                 category={category.item}
//                 handlePress={() => handlePress(category.item.id)}
//             />
//         );
//     }

//     return (
//         <FlatList
//             data={Categories}
//             keyExtractor={(category) => category.id}
//             renderItem={renderCategoryItem}
//             numColumns={2}
//         />
//     );
// }

// export default CategoriesScreen
import { View, Text, FlatList } from 'react-native'

import React from 'react'
import IItemCategory from '../components/IItemCategory';
import { Categories } from '../model/data/dummyData';

const CategoriesScreen = ({ navigation: { navigate } }: any) => {
  const haldlerPress = (id:string) =>{
    navigate('Details', {
      categoryId: id,
    });
  }
  const renderCategoryItem = (category: any) => {
    return (<IItemCategory category = {category.item}
      haldlerPress = {() => haldlerPress(category.item.id)} />)
  }
  return (
    <View style = {{ backgroundColor: 'pink', height: '100%' }}>
      <FlatList data = { Categories }
        keyExtractor = { (category) => category.id }
        renderItem = { renderCategoryItem }
        numColumns = {2}
        />
    </View>
  );
}

export default CategoriesScreen