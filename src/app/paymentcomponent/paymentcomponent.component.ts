import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"
import { RazorpayService } from '../razorpay.service';

declare var Razorpay :any
@Component({
  selector: 'app-paymentcomponent',
  templateUrl: './paymentcomponent.component.html',
  styleUrls: ['./paymentcomponent.component.css']
})
export class PaymentcomponentComponent implements OnInit {

  constructor(private razorpayservice:RazorpayService) { }

  ngOnInit(): void {
  }

  
  
  CreateOrderRequest(amount:String){
    
    if(amount=='' || amount==null){
      alert("Amount Required")
    }

     $.ajax(
       {
         url:'http://localhost:8000/user/create-order',
         data:JSON.stringify({amount:amount,info:'order-request'}),
         contentType:'application/json',
         type:'POST',
         dataType:'json',
         success:function(response){
            console.log(response);
          
            if(response.status=="created"){

              let options={
                key:'rzp_test_KQCCyQPQDo16X5',
                amount:response.amount,
                currency:response.currency,
                name:'Payment Integration Using Angular',
                description:'Donation',
                image:'data:image/jpeg;base64,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',
                order_id:response.id,
                handler:function(response:any){
                  console.log("----------------------------------------");
                  console.log(response.razorpay_payment_id);
                  console.log(response.razorpay_order_id);
                  console.log(response.razorpay_signature);
                  console.log("-----------------------------------------");
                  console.log("Payment Successfull...");
                  alert("Payment Successfull......");
                  
                },
                prefill:{
                  name:"",
                  email:"",
                  contact:"",
                },
                notes:{
                  address:"Payment Integration",
                },
                theme:{
                  color:"#3399cc"
                }
              }

              let rzp=new Razorpay(options);
              
              rzp.on("Payment.failed", function(response:any){
                console.log(response.error.code);
                console.log(response.error.description);
                console.log(response.error.source);
                console.log(response.error.step);
                console.log(response.error.reason);
                console.log(response.error.metadata.order_id);
                console.log(response.error.metadata.payment_id);
                alert("Payment Failed");
              });

              rzp.open();

            }
         },
         error:function(error){
           console.log(error);
           alert("Something went wrong");
           
         }

       }
     )
  }
}
  
  
  
  


