import React from 'react'
import { View, Text,Image,TouchableOpacity } from 'react-native'

import styles from './popularjobcard.style'
import { checkImageURL } from '../../../../utils'
const PopularJobCard = ({item,selectedJob,handleCardPress}) => {
  return (
<TouchableOpacity style={styles.container(selectedJob,item)} onPress={()=>handleCardPress(item)}>
<TouchableOpacity style={styles.logoContainer(selectedJob,item)}>
<Image source={{uri:checkImageURL(item.employer_logo)
? item.employer_logo: 'https://cdn.pixabay.com/photo/2020/07/01/14/53/job-5359923_640.png'
}} resizeMode="contain" style={styles.logoImage}/>

</TouchableOpacity>
<Text style={styles.companyName} numberOfLines={1}>{item.employer_name}</Text>
<View style={styles.infoContainer}>
<Text style={styles.jobName(selectedJob,item)} numberOfLines={1}>{item.job_title}</Text>
</View>
</TouchableOpacity>
  )
}

export default PopularJobCard