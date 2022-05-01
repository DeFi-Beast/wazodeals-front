import { Grid } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import moment from "moment"

const Table = ({value}) => {

    // const {receipt} = useSelector(state => state.receipts)

    console.log("================receipts===============")
    // console.log(receipt)
  return (
    <Grid sm={12}>
        <table style={{width:"100%"}}>
            <tr style={{background:"#80808087",}}>
                <th>S/N</th>
                <th>Date</th>
                <th>Reward Type</th>
                <th>Status</th>
                <th>info</th>
                <th>Points Earned</th>
            </tr>
            {value?.map((val, index) => (
                <tr>
                    <td>{index + 1}</td>
                    <td>{val.status ? `${moment(val.createdAt).format("MMM Do YYYY")}`: "-"}</td>
                    <td>{val.status ? "Receipt" :"Referral"}</td>
                    <td>{val.status === "processing" ? `${val.status}` :"Completed"}</td>
                    <td> - </td>
                    <td>{val.status ? `${val.point}` :"12.5"}</td>

                </tr>
            ))

            }
        </table>
    </Grid>
  )
}

export default Table