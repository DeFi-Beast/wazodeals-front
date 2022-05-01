import { CREATE_WALLET, START_LOADING, END_LOADING } from "../constants";
import * as api from '../api'
import axios from "axios";

export const createWallet = (wallet, navigate)=> async(dispatch) => {
    

    try {
        dispatch({type:START_LOADING})
        var data = '{\n  "firstName": "King",\n  "lastName": "Pharoah",\n  "Bvn":"222",\n  "email": "princzny@egypt.com",\n  "secretKey": "g8xkmtfbqhp5",\n  "dateOfBirth": "1945-01-12",\n  "currency": "NGN"\n}';
        
        var config = {
          method: 'post',
          url: 'https://sandbox.wallets.africa/wallet/generate',
          headers: {Authorization :`Bearer uvjqzm5xl6bw`, 'Content-Type': 'application/json' },
          data : data
        };
        
        axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
          console.log(error);
        });
        dispatch({type:END_LOADING})
        
    
    } catch (error) {
        
    }

}
// export const createWallet = (wallet, navigate)=> async(dispatch) => {
    

//     try {
//         dispatch({type:START_LOADING})

//         const {data} = await api.createWallet(wallet)

//         // dispatch({type:CREATE_WALLET, payload:data})
//         console.log(data)
//         dispatch({type:END_LOADING})
        
    
//     } catch (error) {
        
//     }

// }