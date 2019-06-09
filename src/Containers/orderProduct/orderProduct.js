import React, { Component } from 'react';
import './orderProduct.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../../Components/header/header.js';
import {colors} from '../../assets/colors.js';
import {cover,mainphoto} from '../../assets/string.js';
import Footer from '../../Components/footer/footer.js';
class orderProduct extends Component {
    componentDidMount(){
        var spanElements = document.getElementById('applyform');
         var spans=spanElements.getElementsByTagName('span')
         var hrs=spanElements.getElementsByTagName('hr')
         var headings=spanElements.getElementsByTagName('h4')
         var titles=spanElements.getElementsByTagName('h3')
        for (var i = 0; i < spans.length; i++)
         {  
              spans[i].style.color=colors.paragraphsColor; 
        }
        for (var count = 0; count < hrs.length; count++)
         {  
              hrs[count].style.backgroundColor=colors.sectorsHeading; 
        }
        for (var counte = 0; counte < headings.length; counte++)
         {  
              headings[counte].style.color=colors.sectorsHeading; 
        }
        for (var icount = 0; icount < titles.length; icount++)
        {  
             titles[icount].style.color=colors.sectorsHeading; 
       }
     
       }
    render() {
        document.body.style.overflow = "auto"
        document.body.style.backgroundColor = colors.LinksColors;
        return (
            <div>
                <Nav background={colors.secondaryColor} cover={cover.defult} mainphoto={mainphoto.defult} titlename="order"/>
                 <div class="col-sm-6" id="applyform" >
                    <h4>اطلب منتج</h4>
                    <hr class="applyformhr"></hr>
                    <form class="form-horizontal" >
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="text" class="form-control" id="name" placeholder="الاسم" name="name" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="phone" class="form-control" id="email" placeholder="رقم الجوال" name="email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="col-sm-10">
                                <input type="email" class="form-control" id="email" placeholder="البريد الالكترونى" name="email" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="sel1" class="sellabel" style={{color:colors.primaryColor}}>منتجات المصنع</label>
                            <select class="form-control" id="sel1" style={{backgroundColor:colors.LinksColors,borderColor:colors.aboutbackground}}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" rows="4" id="comment" placeholder="تفاصيل المنتج" style={{backgroundColor:colors.LinksColors,borderColor:colors.aboutbackground}}></textarea>
                        </div>
                            <div class="form-group">
                            <div class="col-sm-10" id="apllybuttons">
                            <input type="submit" class="btn btn-primary" id="signbuttonapply" value="ارسال" style={{backgroundColor :colors.primaryColor,color:colors.LinksColors}}></input>
                            <input type="submit" class="btn btn-primary" id="signbuttonapply" value="اعادة" style={{backgroundColor :colors.primaryColor,color:colors.LinksColors}}></input>
                            </div>
                            
                            
                        </div>                       
                           
                            
                    </form>
                </div>
                <Footer />
            </div>
        );
    }
}
export default orderProduct;