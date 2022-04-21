import React from 'react';
import { StatusBar } from 'react-native'
import {RFValue} from 'react-native-responsive-fontsize'
import Logo from '../../assets/logo.svg'
import { Car } from '../../components/Car';
import { Container, Header, HeaderContent, TotalCars, CarList } from './styles';

export default function Home() {
  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
        period: 'ao dia',
        price: 120,
    },
    thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3gtdkeHjP3rvBHss1a4f-jszq4MnQagPcsYTT5378AN5g0krJV1NbfO-0lQxYU0vuS84&usqp=CAU',    
  }


  return (
    <Container>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Header>
        <HeaderContent>
          <Logo  
            width={RFValue(108)}
            height={RFValue(12)}
          />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
          
        </HeaderContent>  
        
      </Header>
      
      <CarList 
        data={[1,2,3,4,5,6,7,8,9,10]}
        keyExtractor={item => String(item)}
        renderItem={ ({ item }) => <Car data={carData} /> }
          
      />
    
    </Container>
  )
}
