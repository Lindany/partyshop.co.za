window.addEventListener('message', function (evt) {
    if (evt.data == "closemodal")
        jQuery.modal.close();
});

function click_ship() {
    //return true;
}

function toggleoff() {
    var obj1;
    var divs = document.getElementsByTagName("div");
    for (var x = 0; x < divs.length; ++x) {
        if ((divs[x].id.indexOf("shUSPS") >= 0) || (divs[x].id.indexOf("shUPS") >= 0) || (divs[x].id.indexOf("shCA Post") >= 0) || (divs[x].id.indexOf("shFEDEX") >= 0))
            obj1 = document.getElementById(divs[x].id);
        if (obj1 != undefined) {
            obj1.style.display = 'none';
        }
    }
}


function addLoadEvent(func) {
    //Add event to the onload stack
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function () {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}


function toggleoff_mul(shipment) {
    var obj1;
    var divs = document.getElementsByTagName("div");
    for (var x = 0; x < divs.length; ++x) {
        if ((divs[x].id.indexOf("sh" + shipment + "USPS") >= 0) || (divs[x].id.indexOf("sh" + shipment + "UPS") >= 0) || (divs[x].id.indexOf("sh" + shipment + "CA Post") >= 0) || (divs[x].id.indexOf("sh" + shipment + "FEDEX") >= 0))
            obj1 = document.getElementById(divs[x].id);
        if (obj1 != undefined) {
            obj1.style.display = 'none';
        }
    }
}


function toggle(itemname) {
    var obj1;
    obj1 = document.getElementById(itemname);

    if (obj1 != undefined) {

        if (obj1.style.display == 'none') {
            obj1.style.display = ''
        }
        else
            obj1.style.display = 'none'
    }
}


function toggleProdOptions(itemname) {
    var obj1;
    obj1 = document.getElementById(itemname);

    if (obj1 != undefined) {

        if (obj1.style.display == 'none') {
            obj1.style.display = ''
        }
        else
            obj1.style.display = 'none'
    }
}


function doclick() {

}

var shipaddresstype = '';
function filladdress_form(save_address, formname, type) {

    var frm = eval('document.' + formname);

    var oElement = eval(save_address)

    if (oElement.selectedIndex < 0) oElement.selectedIndex = 0;

    if (oElement.selectedIndex > -1) {
        var oValues = oElement.options[oElement.selectedIndex].value.split("::");

        eval("document." + formname + "." + type + "_address").value = oValues[0];
        eval("document." + formname + "." + type + "_firstname").value = oValues[1];
        eval("document." + formname + "." + type + "_lastname").value = oValues[2];
        eval("document." + formname + "." + type + "_address2").value = oValues[3];
        eval("document." + formname + "." + type + "_city").value = oValues[4];
        eval("document." + formname + "." + type + "_zip").value = oValues[5];
        eval("document." + formname + "." + type + "_phone").value = oValues[8];
        eval("document." + formname + "." + type + "_company").value = oValues[9];
        shipaddresstype = oValues[11];

        initCountry(oValues[7], oValues[6], type + '_state', type + '_country');	//Inside admin/state_countryjs.asp

    }
}

function filladdress(save_address) {

    filladdress_form(save_address, save_address.form.name, 'shipping');
    try {
        document.getElementById('addressbook').checked = false;
        if ((document.getElementById('save_address').selectedIndex + 1) == document.getElementById('save_address').options.length) {
            document.getElementById('rowAddAddress').style.display = 'block';
        }
        else
            document.getElementById('rowAddAddress').style.display = 'none';
    }
    catch (e) { }
    return;

    var frm = document.addresslist;

    var oElement = eval(save_address)

    if (oElement.selectedIndex < 0) oElement.selectedIndex = 0;

    if (oElement.selectedIndex > -1) {
        var oValues = oElement.options[oElement.selectedIndex].value.split("::");

        eval("document.checkoutform.shipping_address").value = oValues[0];
        eval("document.checkoutform.shipping_firstname").value = oValues[1];
        eval("document.checkoutform.shipping_lastname").value = oValues[2];
        eval("document.checkoutform.shipping_address2").value = oValues[3];
        eval("document.checkoutform.shipping_city").value = oValues[4];
        eval("document.checkoutform.shipping_zip").value = oValues[5];
        eval("document.checkoutform.shipping_state").value = oValues[6];
        eval("document.checkoutform.shipping_country").value = oValues[7];
        eval("document.checkoutform.shipping_phone").value = oValues[8];
        eval("document.checkoutform.shipping_company").value = oValues[9];

    } else {
        //alert("You must select an address to fill.");
    }
}



var isSubmitComplete = false;
var paymentfound = 0;
var bolCheckSubmitted_validation = true;	//On the page, set it to false if you don't want to check for form already submitted.

function submitForm(bolCheckSubmitted) {

    if (!isSubmitComplete || !bolCheckSubmitted_validation) {

        isSubmitComplete = true;

        return true;

    } else {
        alert("Form already submitted please wait...");
        return false;
    }
}




/*
  -------------------------------------------------------------------------
		      javascript Form Validator (gen_validatorv31.js)
              Version 3.1
	Copyright (C) 2003-2008 javascript-Coder.com. All rights reserved.
	You can freely use this script in your Web pages.
	You may adapt this script for your own needs, provided these opening credit
    lines are kept intact.
		
	The Form validation script is distributed free from javascript-Coder.com
	For updates, please visit:
	http://www.javascript-coder.com/html-form/javascript-form-validation.phtml
	
	Questions & comments please send to support@javascript-coder.com

    ##############################
    The form validation script uses the onsubmit() event of the form to validate the input. The browser does not trigger the onsubmit event if you call the submit method programmatically. 
    Therefore, if the form is using the form validator script, call the onsubmit method also to trigger the validation.
    for ex:
        function submitform()
        {
         if(document.myform.onsubmit())
         {//this check triggers the validations
            document.myform.submit();
         }
        }
    ##############################
  -------------------------------------------------------------------------  
*/
function Validator(frmname) {
    this.formobj = document.forms[frmname];
    if (!this.formobj) {
        alert("Error: couldnot get Form object " + frmname);
        return;
    }
    if (this.formobj.onsubmit) {
        this.formobj.old_onsubmit = this.formobj.onsubmit;
        this.formobj.onsubmit = null;
    }
    else {
        this.formobj.old_onsubmit = null;
    }
    this.formobj._sfm_form_name = frmname;
    this.formobj.onsubmit = form_submit_handler;
    this.addValidation = add_validation;
    this.setAddnlValidationFunction = set_addnl_vfunction;
    this.clearAllValidations = clear_all_validations;
    this.disable_validations = false;//new
    document.error_disp_handler = new sfm_ErrorDisplayHandler();
    this.EnableOnPageErrorDisplay = validator_enable_OPED;
    this.EnableOnPageErrorDisplaySingleBox = validator_enable_OPED_SB;
    this.show_errors_together = true;
    this.EnableMsgsTogether = sfm_enable_show_msgs_together;
    this.setOnErrorFunction = set_onerror_function;
}
function set_addnl_vfunction(functionname) {
    this.formobj.addnlvalidation = functionname;
}
function set_onerror_function(functionname) {
    this.formobj.onerrorfunction = functionname;
}
function sfm_enable_show_msgs_together() {
    this.show_errors_together = true;
    this.formobj.show_errors_together = true;
}
function clear_all_validations() {
    for (var itr = 0; itr < this.formobj.elements.length; itr++) {
        this.formobj.elements[itr].validationset = null;
    }
}
function form_submit_handler() {
    var bRet = true;
    document.error_disp_handler.clear_msgs();
    for (var itr = 0; itr < this.elements.length; itr++) {

        if (this.elements[itr].classList.contains('hasPlaceholder') && this.elements[itr].placeholder == this.elements[itr].value)
            this.elements[itr].value = '';

        if (this.elements[itr].validationset && !this.elements[itr].validationset.validate()) {
            bRet = false;
        }
        if (!bRet && !this.show_errors_together) {
            break;
        }
    }
    if (!bRet) {
        document.error_disp_handler.FinalShowMsg();
        if (this.onerrorfunction) {
            str = this.onerrorfunction + "()";
            eval(str);
        }
        return false;
    }

    if (this.addnlvalidation) {
        str = " var ret = " + this.addnlvalidation + "()";
        eval(str);
        if (!ret) {
            if (this.onerrorfunction) {
                str = this.onerrorfunction + "()";
                eval(str);
            }
            return ret;
        }
    }
    return true;
}
function add_validation(itemname, descriptor, errstr) {
    var condition = null;
    if (arguments.length > 3) {
        condition = arguments[3];
    }

    if (!this.formobj) {
        alert("Error: The form object is not set properly");
        return;
    }//if
    var itemobj = this.formobj[itemname];

    if (itemobj.length && isNaN(itemobj.selectedIndex))
        //for radio button; don't do for 'select' item
    {
        itemobj = itemobj[0];
    }
    if (!itemobj) {
        alert("Error: Couldnot get the input object named: " + itemname);
        return;
    }
    if (!itemobj.validationset) {
        itemobj.validationset = new ValidationSet(itemobj, this.show_errors_together);
    }
    itemobj.validationset.add(descriptor, errstr, condition);
    itemobj.validatorobj = this;
}
function validator_enable_OPED() {
    document.error_disp_handler.EnableOnPageDisplay(false);
}

function validator_enable_OPED_SB() {
    document.error_disp_handler.EnableOnPageDisplay(true);
}
function sfm_ErrorDisplayHandler() {
    this.msgdisplay = new AlertMsgDisplayer();
    this.EnableOnPageDisplay = edh_EnableOnPageDisplay;
    this.ShowMsg = edh_ShowMsg;
    this.FinalShowMsg = edh_FinalShowMsg;
    this.all_msgs = new Array();
    this.clear_msgs = edh_clear_msgs;
}
function edh_clear_msgs() {
    this.msgdisplay.clearmsg(this.all_msgs);
    this.all_msgs = new Array();
}
function edh_FinalShowMsg() {
    this.msgdisplay.showmsg(this.all_msgs);
}
function edh_EnableOnPageDisplay(single_box) {
    if (true == single_box) {
        this.msgdisplay = new SingleBoxErrorDisplay();
    }
    else {
        this.msgdisplay = new DivMsgDisplayer();
    }
}
function edh_ShowMsg(msg, input_element) {

    var objmsg = new Array();
    objmsg["input_element"] = input_element;
    objmsg["msg"] = msg;
    this.all_msgs.push(objmsg);
}
function AlertMsgDisplayer() {
    this.showmsg = alert_showmsg;
    this.clearmsg = alert_clearmsg;
}
function alert_clearmsg(msgs) {

}
function alert_showmsg(msgs) {
    var whole_msg = "";
    var first_elmnt = null;
    for (var m in msgs) {
        if (null == first_elmnt) {
            first_elmnt = msgs[m]["input_element"];
        }
        if (msgs[m]["msg"] != undefined)
            whole_msg += msgs[m]["msg"] + "\n";
    }

    alert(whole_msg);

    if (null != first_elmnt) {
        first_elmnt.focus();
    }
}
function sfm_show_error_msg(msg, input_elmt) {
    document.error_disp_handler.ShowMsg(msg, input_elmt);
}
function SingleBoxErrorDisplay() {
    this.showmsg = sb_div_showmsg;
    this.clearmsg = sb_div_clearmsg;
}

function sb_div_clearmsg(msgs) {
    var divname = form_error_div_name(msgs);
    show_div_msg(divname, "");
}

function sb_div_showmsg(msgs) {
    var whole_msg = "<ul>\n";
    for (var m in msgs) {
        whole_msg += "<li>" + msgs[m]["msg"] + "</li>\n";
    }
    whole_msg += "</ul>";
    var divname = form_error_div_name(msgs);
    show_div_msg(divname, whole_msg);
}
function form_error_div_name(msgs) {
    var input_element = null;

    for (var m in msgs) {
        input_element = msgs[m]["input_element"];
        if (input_element) { break; }
    }

    var divname = "";
    if (input_element) {
        divname = input_element.form._sfm_form_name + "_errorloc";
    }

    return divname;
}
function DivMsgDisplayer() {
    this.showmsg = div_showmsg;
    this.clearmsg = div_clearmsg;
}
function div_clearmsg(msgs) {
    for (var m in msgs) {
        var divname = element_div_name(msgs[m]["input_element"]);
        show_div_msg(divname, "");
    }
}
function element_div_name(input_element) {
    var divname = input_element.form._sfm_form_name + "_" +
					 input_element.name + "_errorloc";

    divname = divname.replace(/[\[\]]/gi, "");

    return divname;
}
function div_showmsg(msgs) {
    var whole_msg;
    var first_elmnt = null;
    for (var m in msgs) {
        if (null == first_elmnt) {
            first_elmnt = msgs[m]["input_element"];
        }
        var divname = element_div_name(msgs[m]["input_element"]);
        show_div_msg(divname, msgs[m]["msg"]);
    }
    if (null != first_elmnt) {
        first_elmnt.focus();
    }
}
function show_div_msg(divname, msgstring) {
    if (divname.length <= 0) return false;

    if (document.layers) {
        divlayer = document.layers[divname];
        if (!divlayer) { return; }
        divlayer.document.open();
        divlayer.document.write(msgstring);
        divlayer.document.close();
    }
    else
        if (document.all) {
            divlayer = document.all[divname];
            if (!divlayer) { return; }
            divlayer.innerHTML = msgstring;
        }
        else
            if (document.getElementById) {
                divlayer = document.getElementById(divname);
                if (!divlayer) { return; }
                divlayer.innerHTML = msgstring;
            }
    divlayer.style.visibility = "visible";
    return false;
}
function ValidationDesc(inputitem, desc, error, condition) {
    this.desc = desc;
    this.error = error;
    this.itemobj = inputitem;
    this.condition = condition;
    this.validate = vdesc_validate;
}
function vdesc_validate() {
    if (this.condition != null) {
        if (!eval(this.condition)) {
            return true;
        }
    }
    if (!validateInput(this.desc, this.itemobj, this.error)) {
        this.itemobj.validatorobj.disable_validations = true;
        this.itemobj.focus();
        return false;
    }
    return true;
}
function ValidationSet(inputitem, msgs_together) {
    this.vSet = new Array();
    this.add = add_validationdesc;
    this.validate = vset_validate;
    this.itemobj = inputitem;
    this.msgs_together = msgs_together;
}
function add_validationdesc(desc, error, condition) {
    this.vSet[this.vSet.length] =
	new ValidationDesc(this.itemobj, desc, error, condition);
}
function vset_validate() {
    var bRet = true;
    for (var itr = 0; itr < this.vSet.length; itr++) {
        bRet = bRet && this.vSet[itr].validate();
        if (!bRet && !this.msgs_together) {
            break;
        }
    }
    return bRet;
}
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function IsCheckSelected(objValue, chkValue) {
    var selected = false;
    var objcheck = objValue.form.elements[objValue.name];
    if (objcheck.length) {
        var idxchk = -1;
        for (var c = 0; c < objcheck.length; c++) {
            if (objcheck[c].value == chkValue) {
                idxchk = c;
                break;
            }//if
        }//for
        if (idxchk >= 0) {
            if (objcheck[idxchk].checked == "1") {
                selected = true;
            }
        }//if
    }
    else {
        if (objValue.checked == "1") {
            selected = true;
        }//if
    }//else	

    return selected;
}
function TestDontSelectChk(objValue, chkValue, strError) {
    var pass = true;
    pass = IsCheckSelected(objValue, chkValue) ? false : true;

    if (pass == false) {
        if (!strError || strError.length == 0) {
            strError = "Can't Proceed as you selected " + objValue.name;
        }//if			  
        sfm_show_error_msg(strError, objValue);

    }
    return pass;
}
function TestShouldSelectChk(objValue, chkValue, strError) {
    var pass = true;

    pass = IsCheckSelected(objValue, chkValue) ? true : false;

    if (pass == false) {
        if (!strError || strError.length == 0) {
            strError = "You should select" + objValue.name;
        }//if			  
        sfm_show_error_msg(strError, objValue);

    }
    return pass;
}
function TestRequiredInput(objValue, strError) {
    var ret = true;
    var value = objValue.value;

    if (objValue.classList.contains("hasPlaceholder") && objValue.placeholder == value)
        value = "";

    if (eval(value.length) == 0 || value.match(/^\s+$/) !== null) {
        if (!strError || strError.length == 0) {
            strError = objValue.name + " : Required Field";
        }//if 
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}
function TestMaxLen(objValue, strMaxLen, strError) {
    var ret = true;
    if (eval(objValue.value.length) > eval(strMaxLen)) {
        if (!strError || strError.length == 0) {
            strError = objValue.name + " : " + strMaxLen + " characters maximum ";
        }//if 
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}
function TestMinLen(objValue, strMinLen, strError) {
    var ret = true;
    if (eval(objValue.value.length) < eval(strMinLen)) {
        if (!strError || strError.length == 0) {
            strError = objValue.name + " : " + strMinLen + " characters minimum  ";
        }//if               
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}
function TestInputType(objValue, strRegExp, strError, strDefaultError) {
    var ret = true;

    var charpos = objValue.value.search(strRegExp);
    if (objValue.value.length > 0 && charpos >= 0) {
        if (!strError || strError.length == 0) {
            strError = strDefaultError;
        }//if 
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}
function TestEmail(objValue, strError) {
    var ret = true;
    if (objValue.value.length > 0 && !validateEmail(objValue.value)) {
        if (!strError || strError.length == 0) {
            strError = objValue.name + ": Enter a valid Email address ";
        }//if                                               
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}
function TestLessThan(objValue, strLessThan, strError) {
    var ret = true;
    if (isNaN(objValue.value)) {
        sfm_show_error_msg(objValue.name + ": Should be a number ", objValue);
        ret = false;
    }//if 
    else
        if (eval(objValue.value) >= eval(strLessThan)) {
            if (!strError || strError.length == 0) {
                strError = objValue.name + " : value should be less than " + strLessThan;
            }//if               
            sfm_show_error_msg(strError, objValue);
            ret = false;
        }//if   
    return ret;
}
function TestGreaterThan(objValue, strGreaterThan, strError) {
    var ret = true;
    if (isNaN(objValue.value)) {
        sfm_show_error_msg(objValue.name + ": Should be a number ", objValue);
        ret = false;
    }//if 
    else
        if (eval(objValue.value) <= eval(strGreaterThan)) {
            if (!strError || strError.length == 0) {
                strError = objValue.name + " : value should be greater than " + strGreaterThan;
            }//if               
            sfm_show_error_msg(strError, objValue);
            ret = false;
        }//if  
    return ret;
}
function TestRegExp(objValue, strRegExp, strError) {
    var ret = true;
    if (objValue.value.length > 0 &&
        !objValue.value.match(strRegExp)) {
        if (!strError || strError.length == 0) {
            strError = objValue.name + ": Invalid characters found ";
        }//if                                                               
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}
function TestDontSelect(objValue, dont_sel_value, strError) {
    var ret = true;
    if (objValue.value == null) {
        sfm_show_error_msg("Error: dontselect command for non-select Item", objValue);
        ret = false;
    }
    else
        if (objValue.value == dont_sel_value) {
            if (!strError || strError.length == 0) {
                strError = objValue.name + ": Please Select one option ";
            }//if                                                               
            sfm_show_error_msg(strError, objValue);
            ret = false;
        }
    return ret;
}
function TestSelectOneRadio(objValue, strError) {
    var objradio = objValue.form.elements[objValue.name];
    var one_selected = false;
    for (var r = 0; r < objradio.length; r++) {
        if (objradio[r].checked == "1") {
            one_selected = true;
            break;
        }
    }
    if (false == one_selected) {
        if (!strError || strError.length == 0) {
            strError = "Please select one option from " + objValue.name;
        }
        sfm_show_error_msg(strError, objValue);
    }
    return one_selected;
}

function validateInput(strValidateStr, objValue, strError) {
    var ret = true;
    var epos = strValidateStr.search("=");
    var command = "";
    var cmdvalue = "";
    if (epos >= 0) {
        command = strValidateStr.substring(0, epos);
        cmdvalue = strValidateStr.substr(epos + 1);
    }
    else {
        command = strValidateStr;
    }

    switch (command) {
        case "req":
        case "required":
            {
                ret = TestRequiredInput(objValue, strError)
                break;
            }//case required 
        case "maxlength":
        case "maxlen":
            {
                ret = TestMaxLen(objValue, cmdvalue, strError)
                break;
            }//case maxlen 
        case "minlength":
        case "minlen":
            {
                ret = TestMinLen(objValue, cmdvalue, strError)
                break;
            }//case minlen 
        case "alnum":
        case "alphanumeric":
            {
                ret = TestInputType(objValue, "[^A-Za-z0-9]", strError,
						objValue.name + ": Only alpha-numeric characters allowed ");
                break;
            }
        case "alnum_s":
        case "alphanumeric_space":
            {
                ret = TestInputType(objValue, "[^A-Za-z0-9\\s]", strError,
						objValue.name + ": Only alpha-numeric characters and space allowed ");
                break;
            }
        case "num":
        case "numeric":
            {
                ret = TestInputType(objValue, "[^0-9]", strError,
						objValue.name + ": Only digits allowed ");
                break;
            }
        case "alphabetic":
        case "alpha":
            {
                ret = TestInputType(objValue, "[^A-Za-z]", strError,
						objValue.name + ": Only alphabetic characters allowed ");
                break;
            }
        case "alphabetic_space":
        case "alpha_s":
            {
                ret = TestInputType(objValue, "[^A-Za-z\\s]", strError,
						objValue.name + ": Only alphabetic characters and space allowed ");
                break;
            }
        case "email":
            {
                ret = TestEmail(objValue, strError);
                break;
            }
        case "phone":
            {

                ret = validatePhone(objValue, strError);
                break;
            }

        case "lt":
        case "lessthan":
            {
                ret = TestLessThan(objValue, cmdvalue, strError);
                break;
            }
        case "gt":
        case "greaterthan":
            {
                ret = TestGreaterThan(objValue, cmdvalue, strError);
                break;
            }//case greaterthan 
        case "regexp":
            {
                ret = TestRegExp(objValue, cmdvalue, strError);
                break;
            }
        case "dontselect":
            {
                ret = TestDontSelect(objValue, cmdvalue, strError)
                break;
            }
        case "dontselectchk":
            {
                ret = TestDontSelectChk(objValue, cmdvalue, strError)
                break;
            }
        case "shouldselchk":
            {
                ret = TestShouldSelectChk(objValue, cmdvalue, strError)
                break;
            }
        case "selone_radio":
            {
                ret = TestSelectOneRadio(objValue, strError);
                break;
            }
    }//switch 
    return ret;
}


function TestEmail(objValue, strError) {
    var ret = true;
    if (objValue.value.length > 0 && !validateEmail(objValue.value)) {
        if (!strError || strError.length == 0) {
            strError = objValue.name + ": Enter a valid Email address ";
        }//if                                               
        sfm_show_error_msg(strError, objValue);
        ret = false;
    }//if 
    return ret;
}

function validatePhone(objValue, strError) {

    // a very simple email validation checking. 
    // you can add more complex email checking if it helps 
    var phonenumber = objValue.value;
    var ret = false;

    if (phonenumber.length <= 0) {
        ret = false;
    }

    var digits = "0123456789";
    var phoneNumberDelimiters = "()- ";
    var validWorldPhoneChars = phoneNumberDelimiters + "+";
    var minDigitsInIPhoneNumber = 10;

    s = stripCharsInBag(phonenumber, validWorldPhoneChars);
    if (isInteger(s) && s.length >= minDigitsInIPhoneNumber) {
        ret = true;
    }

    if (!strError || strError.length == 0) {
        strError = objValue.name + ": Phone number is invalid ";
    }

    if (!ret)
        sfm_show_error_msg(strError, objValue);

    return ret;
}

function stripCharsInBag(s, bag) {
    var i;
    var returnString = "";
    // Search through string's characters one by one.
    // If character is not in bag, append to returnString.
    for (i = 0; i < s.length; i++) {
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}

function isInteger(s) {
    var i;
    for (i = 0; i < s.length; i++) {
        // Check that current character is number.
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    // All characters are numbers.
    return true;
}

function VWZ_IsListItemSelected(listname, value) {
    for (var i = 0; i < listname.options.length; i++) {
        if (listname.options[i].selected == true &&
		 listname.options[i].value == value) {
            return true;
        }
    }
    return false;
}
function VWZ_IsChecked(objcheck, value) {
    if (objcheck.length) {
        for (var c = 0; c < objcheck.length; c++) {
            if (objcheck[c].checked == "1" &&
			  objcheck[c].value == value) {
                return true;
            }
        }
    }
    else {
        if (objcheck.checked == "1") {
            return true;
        }
    }
    return false;
}
/*
	Copyright (C) 2003-2008 javascript-Coder.com . All rights reserved.
*/

// FOR CHECKOUT 1
//////////////////////////////////////////////////////////////////////////////////////////
function Changeshippingtype(stype) {
    if (stype == 1) {

        country_object = "document.checkoutform.shipping_country";
        if (eval(country_object)) {
            document.checkoutform.shipping_type[0].checked = true;
            select_field(country_object, "US");
        }

    }
    else {
        document.checkoutform.shipping_type[1].checked = true;
    }


}


function select_field(objectname, objvalue) {
    for (i = 0; i <= (eval(objectname + '.length') - 1) ; i++) {
        if ((eval(objectname + '.options[' + i + '].value')) == objvalue) {
            eval(objectname + '.options[' + i + '].selected=true');
        }
        else {
            eval(objectname + '.options[' + i + '].selected=false');
        }
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

// FOR CHECKOUT 2
//////////////////////////////////////////////////////////////////////////////////////////
function checkselectedshipping() {

}
//////////////////////////////////////////////////////////////////////////////////////////

// FOR CHECKOUT 3
//////////////////////////////////////////////////////////////////////////////////////////


//document.billing.billing_country.value='[shipping_country]';

// For each option in country drop down... find index of shipping country, and select it!

function select_field(objectname, objvalue) {
    for (i = 0; i <= (eval(objectname + '.length') - 1) ; i++) {
        if ((eval(objectname + '.options[' + i + '].value')) == objvalue) {
            eval(objectname + '.options[' + i + '].selected=true');
        }
        else {
            eval(objectname + '.options[' + i + '].selected=false');
        }
    }
}

function Changeshippingtypeb(stype) {
    if (stype == 1) {
        if (eval(country_object)) {
            document.billing.billing_type[0].checked = true;
            country_object = "document.billing.billing_country";
            select_field(country_object, "US");
        }
    }
    else {
        document.billing.billing_type[1].checked = true;
    }
}
//////////////////////////////////////////////////////////////////////////////////////////

function checkreq_questions1() {
    var frm = document.forms["checkoutform"];
    var fieldval;

    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].name != undefined && (frm.elements[i].name.indexOf('OPTREQ') > -1)) {

            if (frm.elements[i].type == 'checkbox') {
                if ((frm.elements[i].checked) != true) {
                    alert("Please fill in all required fields.");
                    frm.elements[i].focus();
                    return false;
                }
            }
            else {
                if (frm.elements[i].value <= '') {
                    alert("Please fill in all required fields.");
                    frm.elements[i].focus();
                    return false;
                }
            }
        }
        if (frm.elements[i].type && frm.elements[i].type.indexOf('text') > -1 && frm.elements[i].name.indexOf('ocardno') <= -1 && frm.elements[i].name.indexOf('Paymetric_') <= -1) {
            if (ExistsCreditCard(frm.elements[i].value)) {
                alert(ccNumerNotAllowedMessage);
                return false;
            }
        }
    }

    return submitForm();

}

function checkreq_questions3() {
    var frm = document.forms["billing"];
    var fieldval;

    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].name != undefined && (frm.elements[i].name.indexOf('OPTREQ') > -1)) {

            if (frm.elements[i].name.indexOf('cq') > -1) {

                if (frm.elements[i].type == 'checkbox') {
                    if ((frm.elements[i].checked) != true) {
                        alert("Please fill in all required fields.");
                        frm.elements[i].focus();
                        return false;
                    }
                }
                else {
                    if (frm.elements[i].value <= '') {
                        alert("Please fill in all required fields.");
                        frm.elements[i].focus();
                        return false;
                    }
                }

            }

            if (frm.elements[i].name.indexOf('cka') > -1) {
                if (frm.elements[i].type == 'radio') {
                    if (jQuery('input[name=' + frm.elements[i].name + ']:checked').length <= 0) {
                        alert("Please fill in all required fields.");
                        frm.elements[i].focus();
                        return false;
                    }
                }
                else {
                    if (frm.elements[i].type == 'select-one') {
                        if (jQuery("#" + frm.elements[i].name + " option:selected").text().toLowerCase() === 'select one') {
                            alert("Please fill in all required fields.");
                            frm.elements[i].focus();
                            return false;
                        }
                    }
                }
            }
        }

        if (frm.elements[i].type && frm.elements[i].type.indexOf('text') > -1 && frm.elements[i].name.indexOf('ocardno') <= -1 && frm.elements[i].name.indexOf('Paymetric_') <= -1) {
            if (ExistsCreditCard(frm.elements[i].value)) {
                alert(ccNumerNotAllowedMessage);
                return false;
            }
        }
    }
}

function checkreq_questions2() {
    var frm = document.forms["pickship"];
    var fieldval;

    for (var i = 0; i < frm.elements.length; i++) {
        if (frm.elements[i].name != undefined && (frm.elements[i].name.indexOf('OPTREQ') > -1)) {

            if (frm.elements[i].type == 'checkbox') {
                if ((frm.elements[i].checked) != true) {
                    alert("Please fill in all required fields.");
                    frm.elements[i].focus();
                    return false;
                }
            }
            else {
                if (frm.elements[i].value <= '') {
                    alert("Please fill in all required fields.");
                    frm.elements[i].focus();
                    return false;
                }
            }
        }
        if (frm.elements[i].type && frm.elements[i].type.indexOf('text') > -1 && frm.elements[i].name.indexOf('ocardno') <= -1 && frm.elements[i].name.indexOf('Paymetric_') <= -1) {
            if (ExistsCreditCard(frm.elements[i].value)) {
                alert(ccNumerNotAllowedMessage);
                return false;
            }
        }
    }

    return submitForm();
}




function checkotherreqfields() {
    var frm = document.forms["billing"];
    var fieldval;
    var paymentinfo;
    var paymentsel;

    var maxpmethods = 0;

    if (frm.payment != 'undefined' && frm.payment != null)
        if (frm.payment.length != 'undefined')
            maxpmethods = frm.payment.length;

    if (maxpmethods > 0) {
        // Loop from zero to the one minus the number of radio button selections
        for (counter = 0; counter < maxpmethods; counter++) {
            // If a radio button has been selected it will return true
            // (If not it will return false)
            if (frm.payment[counter].checked)
                paymentsel = frm.payment[counter].value;
        }
    }
    else {
        if (frm.payment != 'undefined' && frm.payment != null)
            paymentsel = frm.payment.value;
    }


    if (paymentsel > '') {
        paymentinfo = paymentsel.split("-");



        for (var i = 0; i < frm.elements.length; i++) {
            if (frm.elements[i].name != undefined && (frm.elements[i].name.indexOf('OPTREQ') > -1)) {
                if ((frm.elements[i].name.indexOf('ff' + paymentinfo[1] + '_') > -1)) {
                    if (frm.elements[i].value <= '') {
                        alert("Please fill in all required fields.");
                        frm.elements[i].focus();
                        return false;
                    }
                }
            }
        }


    }

    if (CheckCreditCards() != false) //' If credit cards pass, lets check submit wasnt done twice. 
    {
        if (checkreq_questions3() != false) {
            return submitForm();
        }
        else {
            return false;
        }

    }
    else {
        return false;
    }

}

function CheckCreditCards() {

    var comingFrom = "";

    if (arguments.length == 1) {
        comingFrom = arguments[0];
    }

    var frm = document.forms["billing"];
    var paymentsel;
    var maxpmethods = 0;

    if (comingFrom == 'virtualterminal') {
        maxpmethods = 1;
    }
    else {
        if (frm.payment != 'undefined' && frm.payment != null)
            if (frm.payment.length != 'undefined')
                maxpmethods = frm.payment.length;
    }

    if (maxpmethods > 0) {
        // Loop from zero to the one minus the number of radio button selections
        for (counter = 0; counter < maxpmethods; counter++) {
            // If a radio button has been selected it will return true
            // (If not it will return false)
            if (comingFrom == 'virtualterminal') {
                paymentsel = 'online-' + frm.payment.value;
            }
            else {
                if (frm.payment[counter].checked)
                    paymentsel = frm.payment[counter].value;
            }
        }
    }
    else {
        if (frm.payment != 'undefined' && frm.payment != null)
            paymentsel = frm.payment.value;
    }


    if (paymentsel > '') {
        paymentinfo = paymentsel.split("-");

        //Check if credit card field is present, if so, check validity...
        var cc_field
        var paymentid = paymentinfo[1];
        var cc_expmonth;
        var cc_expyear;
        var cc_cvv2;
        var cc_type;
        var ck_routing;
        var ck_account;
        var cc_cvv2_required;

        if (paymentsel.indexOf("CIM") > 1) {
            return true;	//Remove this in case we chage the cc selection from Dropdown to checkbox/radio...

            maxCIMProfiles = 0;
            if (frm.authCIMProfileID != 'undefined' && frm.authCIMProfileID != null)
                if (frm.authCIMProfileID.length)
                    maxCIMProfiles = frm.authCIMProfileID.length;

            //alert(maxCIMProfiles);
            if (maxCIMProfiles > 0) {
                for (counter = 0; counter < maxCIMProfiles; counter++) {
                    //alert(frm.authCIMProfileID[counter].value);
                    if (frm.authCIMProfileID[counter].checked)
                        return true;
                }
            }
            else {
                //alert(frm.authCIMProfileID.value);
                //alert(frm.authCIMProfileID.checked);
                if (frm.authCIMProfileID.checked)
                    return true;
            }

            alert('Please select a credit card.');
            return false;
        }

        if (paymentinfo[0] == "transflow") //validate the mtn mobile number
        {
            cc_field = eval("document.forms['billing'].ff" + paymentid + "_ocardno");
            if (cc_field != undefined) {
                if (cc_field.value == "") {
                    alert("Please enter your mobile number.");
                    return false;
                }
            }
        }

        if (comingFrom == 'virtualterminal') {
            cc_field = eval("document.forms['billing'].ocardno");
            cc_expmonth = eval("document.forms['billing'].ocardexpiresmonth");
            cc_expyear = eval("document.forms['billing'].ocardexpiresyear");
            cc_cvv2 = eval("document.forms['billing'].ocardcvv2");
        }
        else {
            cc_field = eval("document.forms['billing'].ff" + paymentid + "_ocardno");
            cc_expmonth = eval("document.forms['billing'].ff" + paymentid + "_ocardexpiresmonth");
            cc_expyear = eval("document.forms['billing'].ff" + paymentid + "_ocardexpiresyear");
            cc_cvv2 = eval("document.forms['billing'].ff" + paymentid + "_ocardcvv2");
            cc_cvv2_required = eval("document.forms['billing'].hdnCvvRequired");
            cc_type = eval("document.forms['billing'].ff" + paymentid + "_ocardtype");
            ck_routing = eval("document.forms['billing'].ff" + paymentid + "_ocheckrouting");
            ck_account = eval("document.forms['billing'].ff" + paymentid + "_ocheckaccount");
        }

        if ((cc_cvv2 != undefined) && (cc_cvv2_required != undefined)) {
            if (cc_cvv2.value == "" && cc_cvv2_required.value == "1") {
                alert("Please enter CVV2 (Card Verification Code)");
                return false;
            }
        }

        if ((cc_field != undefined) && (cc_expmonth != undefined) && (cc_expyear != undefined)) {
            return CheckCardNumber(cc_field, cc_expmonth, cc_expyear, cc_type);
        }
        else {
            if ((ck_routing != undefined) && (ck_account != undefined)) {
                if (ck_routing.value.replace(/^\s+|\s+$/g, "") == "") {
                    alert("Please enter a Routing Number.");
                    ck_routing.focus();
                    return false;
                }
                if (ck_account.value.replace(/^\s+|\s+$/g, "") == "") {
                    alert("Please enter an Account Number.");
                    ck_account.focus();
                    return false;
                }
            }
            else
                return true;
        }

    }

}

/*************************************************************************\
CheckCardNumber(form)
function called when users click the "check" button.
\*************************************************************************/
function CheckCardNumber(cardnum, cardmonth, cardyear, cc_type) {
    var tmpyear;
    if (cardnum.value.length == 0) {
        alert("Please enter a Card Number.");
        cardnum.focus();
        return false;
    }

    if (cardyear.type == 'hidden')
        return true;

    if (cardyear.options[cardyear.selectedIndex].value > 2000)
        tmpyear = cardyear.options[cardyear.selectedIndex].value;
    else if (cardyear.options[cardyear.selectedIndex].value < 100)
        tmpyear = "20" + cardyear.options[cardyear.selectedIndex].value;
    else {
        alert("The Expiration Year is not valid.");
        return false;
    }
    tmpmonth = cardmonth.options[cardmonth.selectedIndex].value;


    // The following line doesn't work in IE3, you need to change it
    // to something like "(new CardType())...".
    // if (!CardType().isExpiryDate(tmpyear, tmpmonth)) {
    if (!(new CardType()).isExpiryDate(tmpyear, tmpmonth)) {
        alert("This card has already expired.");
        return false;
    }

    card = "MasterCard";

    var retval = false;

    if (cc_type == 'undefined' || cc_type == undefined) {
        retval = new CardType().checkCardNumber(cardnum.value, tmpyear, tmpmonth, '');
    }
    else {
        if (cc_type[cc_type.selectedIndex].value.toLowerCase() == 'maestro' && cardnum.value.length == 18) {
            retval = true;
        }
        else {
            //retval = new CardType().checkCardNumber(cardnum.value, tmpyear, tmpmonth, cc_type.value);
            retval = isValidCreditCard(cc_type.value, cardnum.value);
        }
    }
    cardname = "";

    var checkCardype;
    if (eval("document.forms['billing'].hdnVerifyCardType") != undefined)
        checkCardype = eval("document.forms['billing'].hdnVerifyCardType.value");

    if (retval || checkCardype != '1') {
        return true;
    }
    else {
        alert("Credit card number is incorrect");
        cardnum.focus();
        return false;
    }
}
/*************************************************************************\
Object CardType([String cardtype, String rules, String len, int year, 
                                        int month])
cardtype    : type of card, eg: MasterCard, Visa, etc.
rules       : rules of the cardnumber, eg: "4", "6011", "34,37".
len         : valid length of cardnumber, eg: "16,19", "13,16".
year        : year of expiry date.
month       : month of expiry date.
eg:
var VisaCard = new CardType("Visa", "4", "16");
var AmExCard = new CardType("AmEx", "34,37", "15");
\*************************************************************************/
function CardType() {
    var n;
    var argv = CardType.arguments;
    var argc = CardType.arguments.length;

    this.objname = "object CardType";

    var tmpcardtype = (argc > 0) ? argv[0] : "CardObject";
    var tmprules = (argc > 1) ? argv[1] : "0,1,2,3,4,5,6,7,8,9";
    var tmplen = (argc > 2) ? argv[2] : "13,14,15,16,19";

    this.setCardNumber = setCardNumber;  // set CardNumber method.
    this.setCardType = setCardType;  // setCardType method.
    this.setLen = setLen;  // setLen method.
    this.setRules = setRules;  // setRules method.
    this.setExpiryDate = setExpiryDate;  // setExpiryDate method.

    this.setCardType(tmpcardtype);
    this.setLen(tmplen);
    this.setRules(tmprules);
    if (argc > 4)
        this.setExpiryDate(argv[3], argv[4]);

    this.checkCardNumber = checkCardNumber;  // checkCardNumber method.
    this.getExpiryDate = getExpiryDate;  // getExpiryDate method.
    this.getCardType = getCardType;  // getCardType method.
    this.isCardNumber = isCardNumber;  // isCardNumber method.
    this.isExpiryDate = isExpiryDate;  // isExpiryDate method.
    this.luhnCheck = luhnCheck;// luhnCheck method.
    return this;
}

/*************************************************************************\
boolean checkCardNumber([String cardnumber, int year, int month])
return true if cardnumber pass the luhncheck and the expiry date is
valid, else return false.
\*************************************************************************/
function checkCardNumber() {
    var argv = checkCardNumber.arguments;
    var argc = checkCardNumber.arguments.length;
    var cardnumber = (argc > 0) ? argv[0] : this.cardnumber;
    var year = (argc > 1) ? argv[1] : this.year;
    var month = (argc > 2) ? argv[2] : this.month;

    this.setCardNumber(cardnumber);
    this.setExpiryDate(year, month);

    if (!this.isCardNumber())
        return false;
    if (!this.isExpiryDate())
        return false;

    return true;
}
/*************************************************************************\
String getCardType()
return the cardtype.
\*************************************************************************/
function getCardType() {
    return this.cardtype;
}
/*************************************************************************\
String getExpiryDate()
return the expiry date.
\*************************************************************************/
function getExpiryDate() {
    return this.month + "/" + this.year;
}
/*************************************************************************\
boolean isCardNumber([String cardnumber])
return true if cardnumber pass the luhncheck and the rules, else return
false.
\*************************************************************************/
function isCardNumber() {
    var argv = isCardNumber.arguments;
    var argc = isCardNumber.arguments.length;
    var cardnumber = (argc > 0) ? argv[0] : this.cardnumber;
    if (!this.luhnCheck())
        return false;

    for (var n = 0; n < this.len.size; n++)
        if (cardnumber.toString().length == this.len[n]) {
            for (var m = 0; m < this.rules.size; m++) {
                var headdigit = cardnumber.substring(0, this.rules[m].toString().length);
                if (headdigit == this.rules[m])
                    return true;
            }
            return false;
        }
    return false;
}

/*************************************************************************\
boolean isExpiryDate([int year, int month])
return true if the date is a valid expiry date,
else return false.
\*************************************************************************/
function isExpiryDate() {
    var argv = isExpiryDate.arguments;
    var argc = isExpiryDate.arguments.length;

    year = argc > 0 ? argv[0] : this.year;
    month = argc > 1 ? argv[1] : this.month;

    if (!isNum(year + ""))
        return false;
    if (!isNum(month + ""))
        return false;
    today = new Date();
    expiry = new Date(year, month);
    if (today.getTime() > expiry.getTime())
        return false;
    else
        return true;
}

/*************************************************************************\
boolean isNum(String argvalue)
return true if argvalue contains only numeric characters,
else return false.
\*************************************************************************/
function isNum(argvalue) {
    argvalue = argvalue.toString();

    if (argvalue.length == 0)
        return false;

    for (var n = 0; n < argvalue.length; n++)
        if (argvalue.substring(n, n + 1) < "0" || argvalue.substring(n, n + 1) > "9")
            return false;

    return true;
}

/*************************************************************************\
boolean luhnCheck([String CardNumber])
return true if CardNumber pass the luhn check else return false.
Reference: http://www.ling.nwu.edu/~sburke/pub/luhn_lib.pl
\*************************************************************************/
function luhnCheck() {
    var argv = luhnCheck.arguments;
    var argc = luhnCheck.arguments.length;

    var CardNumber = argc > 0 ? argv[0] : this.cardnumber;

    if (!isNum(CardNumber)) {
        return false;
    }

    var no_digit = CardNumber.length;
    var oddoeven = no_digit & 1;
    var sum = 0;

    for (var count = 0; count < no_digit; count++) {
        var digit = parseInt(CardNumber.charAt(count));
        if (!((count & 1) ^ oddoeven)) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        sum += digit;
    }
    if (sum % 10 == 0)
        return true;
    else
        return false;
}

/*************************************************************************\
ArrayObject makeArray(int size)
return the array object in the size specified.
\*************************************************************************/
function makeArray(size) {
    this.size = size;
    return this;
}

/*************************************************************************\
CardType setCardNumber(cardnumber)
return the CardType object.
\*************************************************************************/
function setCardNumber(cardnumber) {
    this.cardnumber = cardnumber;
    return this;
}

/*************************************************************************\
CardType setCardType(cardtype)
return the CardType object.
\*************************************************************************/
function setCardType(cardtype) {
    this.cardtype = cardtype;
    return this;
}

/*************************************************************************\
CardType setExpiryDate(year, month)
return the CardType object.
\*************************************************************************/
function setExpiryDate(year, month) {
    this.year = year;
    this.month = month;
    return this;
}

/*************************************************************************\
CardType setLen(len)
return the CardType object.
\*************************************************************************/
function setLen(len) {
    // Create the len array.
    if (len.length == 0 || len == null)
        len = "13,14,15,16,19";

    var tmplen = len;
    n = 1;
    while (tmplen.indexOf(",") != -1) {
        tmplen = tmplen.substring(tmplen.indexOf(",") + 1, tmplen.length);
        n++;
    }
    this.len = new makeArray(n);
    n = 0;
    while (len.indexOf(",") != -1) {
        var tmpstr = len.substring(0, len.indexOf(","));
        this.len[n] = tmpstr;
        len = len.substring(len.indexOf(",") + 1, len.length);
        n++;
    }
    this.len[n] = len;
    return this;
}

/*************************************************************************\
CardType setRules()
return the CardType object.
\*************************************************************************/
function setRules(rules) {
    // Create the rules array.
    if (rules.length == 0 || rules == null)
        rules = "0,1,2,3,4,5,6,7,8,9";

    var tmprules = rules;
    n = 1;
    while (tmprules.indexOf(",") != -1) {
        tmprules = tmprules.substring(tmprules.indexOf(",") + 1, tmprules.length);
        n++;
    }
    this.rules = new makeArray(n);
    n = 0;
    while (rules.indexOf(",") != -1) {
        var tmpstr = rules.substring(0, rules.indexOf(","));
        this.rules[n] = tmpstr;
        rules = rules.substring(rules.indexOf(",") + 1, rules.length);
        n++;
    }
    this.rules[n] = rules;
    return this;
}
//  End -->

function isValidCreditCard(type, ccnum) {

    type = type.toLowerCase();

    if (type == "visa") {
        // Visa: length 16, prefix 4, dashes optional.
        var re = /^4\d{3}-?\d{4}-?\d{4}-?\d{4}$/;
    } else if (type == "mc" || type == "mastercard" || type == "master") {
        // Mastercard: length 16, prefix 51-55, dashes optional.
        var re = /^5[1-5]\d{2}-?\d{4}-?\d{4}-?\d{4}$/;
    } else if (type == "disc" || type == "discover") {
        // Discover: length 16, prefix 6011, dashes optional.
        var re = /^6011-?\d{4}-?\d{4}-?\d{4}$/;
    } else if (type == "amex" || type == "americanexpress" || type == "american express") {
        // American Express: length 15, prefix 34 or 37.
        var re = /^3[47]\d{13}$/;
    } else if (type == "diners" || type == "diners club" || type == "dinersclub") {
        // Diners: length 14, prefix 30, 36, or 38.
        var re = /^3[068]\d{12}$/;
    } else {
        // type not on the list, return true
        return true;
    }

    if (!re.test(ccnum)) return false;
    // Remove all dashes for the checksum checks to eliminate negative numbers
    ccnum = ccnum.split("-").join("");
    // Checksum ("Mod 10")
    // Add even digits in even length strings or odd digits in odd length strings.
    var checksum = 0;
    for (var i = (2 - (ccnum.length % 2)) ; i <= ccnum.length; i += 2) {
        checksum += parseInt(ccnum.charAt(i - 1));
    }
    // Analyze odd digits in even length strings or even digits in odd length strings.
    for (var i = (ccnum.length % 2) + 1; i < ccnum.length; i += 2) {
        var digit = parseInt(ccnum.charAt(i - 1)) * 2;
        if (digit < 10) { checksum += digit; } else { checksum += (digit - 9); }
    }
    if ((checksum % 10) == 0) return true; else return false;
}


function get_Element(i) {
    return document.getElementById(i) || document.getElementsByName(i).item(0);
}

function getEl(elRef) {
    if (typeof elRef == 'string') {
        if (document.getElementById(elRef)) return document.getElementById(elRef);
        if (document.forms[elRef]) return document.forms[elRef];
        if (document[elRef]) return document[elRef];
        if (window[elRef]) return window[elRef];
    }
    return elRef;	// Return original ref.	
}

function getFamily(el, formRef) {
    var els = formRef.elements;
    var retArray = new Array();
    for (var no = 0; no < els.length; no++) {
        if (els[no].name == el.name) retArray[retArray.length] = els[no];
    }
    return retArray;
}

function getElemValue(elem) {
    if (typeof jQuery == 'undefined') {
        return elem.value;
    } else {
        var $this = jQuery(elem),
            val = $this.eq(0).val();
        if (val == $this.attr('placeholder'))
            return '';
        else
            return val;
    }
}

function getValuesAsArray(formRef) {
    var retArray = new Object();
    formRef = getEl(formRef);
    var els = formRef.elements;
    for (var no = 0; no < els.length; no++) {
        if (els[no].disabled) continue;
        var tag = els[no].tagName.toLowerCase();
        switch (tag) {
            case "input":
                var type = els[no].type.toLowerCase();
                if (!type) type = 'text';
                switch (type) {
                    case "text":
                    case "image":
                    case "hidden":
                    case "password":
                        retArray[els[no].name] = getElemValue(els[no]);
                        break;
                    case "checkbox":
                        var boxes = this.getFamily(els[no], formRef);
                        if (boxes.length > 1) {
                            retArray[els[no].name] = new Array();
                            for (var no2 = 0; no2 < boxes.length; no2++) {
                                if (boxes[no2].checked) {
                                    var index = retArray[els[no].name].length;
                                    retArray[els[no].name][index] = getElemValue(boxes[no2]);
                                }
                            }
                        } else {
                            if (els[no].checked) retArray[els[no].name] = getElemValue(els[no]);
                        }
                        break;
                    case "radio":
                        if (els[no].checked) retArray[els[no].name] = getElemValue(els[no]);
                        break;

                }
                break;
            case "select":
                var string = '';
                var mult = els[no].getAttribute('multiple');
                if (mult || mult === '') {
                    retArray[els[no].name] = new Array();
                    for (var no2 = 0; no2 < els[no].options.length; no2++) {
                        var index = retArray[els[no].name].length;
                        if (els[no].options[no2].selected) retArray[els[no].name][index] = els[no].options[no2].value;
                    }
                } else if (els[no] && els[no].options.length > 0) {
                    retArray[els[no].name] = els[no].options[els[no].selectedIndex].value;
                }
                break;
            case "textarea":
                retArray[els[no].name] = getElemValue(els[no]);
                break;
        }
    }
    return retArray;
}

function isArray(el) {
    if (el.constructor.toString().indexOf("Array") != -1) return true;
    return false;
}

function popup(filename, width, height, scroll1) {
    if (scroll1 > 0)
        result = window.open(filename, "popped", "width=" + width + ", height=" + height + ", location=no, menubar=no, status=no, toolbar=no, scrollbars=yes, resizable=no");
    else
        result = window.open(filename, "popped", "width=" + width + ", height=" + height + ", location=no, menubar=no, status=no, toolbar=no, scrollbars=no, resizable=no");

    if (result != null)
        html = "is not blocking";
    else
        alert("Your Browser is blocking popups which is preventing a 3dCart window to appear.");
}

function VerifyStrongPass(obj) {

    var pctStrong = 0;
    var pwd = obj.value;

    if (pwd.match(new RegExp(/(?=^.{8,16}$)(?=.*\d)(?=.*[A-Z])(?=.*[a-z]).*$/)))
        pctStrong = 100;
    else {
        pctStrong += (pwd.match(new RegExp(/(?=.*\d).*$/)) ? 3 : 0);
        pctStrong += (pwd.match(new RegExp(/(?=.*[a-z]).*$/)) ? 3 : 0);
        pctStrong += (pwd.match(new RegExp(/(?=.*[A-Z]).*$/)) ? 4 : 0);
        pctStrong += (pwd.match(new RegExp(/(?=.*[\W]+).*$/)) ? 3 : 0);

        pctStrong = pctStrong * pwd.length;
    }

    document.getElementById('divStrong').style.width = (100 - pctStrong) + '%';

}

/*	Validate Required Product Options
	---------------------------------	*/
function validateReqOption(formx, form_id) {

    var reqFields;
    if (form_id != undefined && form_id != null)
        reqFields = jQuery("#add" + form_id + " input[name=required_field]");
    else
        reqFields = document.getElementsByName('required_field');

    var requiredfieldscomplete = 0;
    var singleoption;

    for (var x = 0; x < reqFields.length; x++) {
        requiredfieldscomplete = 0;
        //var reqOption = eval(document.getElementsByName(reqFields[x].value));

        var reqOption;
        var myType;
        var reqOptionr;

        if (reqFields[x].value.indexOf("optionset") < 0) {
            reqOptionr = jQuery("[name='" + reqFields[x].value + "']", formx);
        }
        else {
            var arrAux = reqFields[x].value.split(":");
            reqOptionr = jQuery(document).find('[data-optionset="' + arrAux[2] + '"]');
        }
        reqOption = reqOptionr[0];
        myType = reqOption.type;
        singleoption = (reqOptionr.length == 1);
        reqOptionr.closest('.opt-regular').removeClass('option-required');

        if (myType != null && myType != undefined) {
            fieldnamemod = reqOption.name;
            if (fieldnamemod != '') {
                var field_array;

                if (myType == 'radio' || myType == 'checkbox') {
                    if (singleoption) {
                        if (reqOption.checked) {
                            requiredfieldscomplete = 1;
                        }
                    }
                    else {
                        for (var y = 0; y < reqOptionr.length; y++) {
                            if (reqOptionr[y].checked) {
                                requiredfieldscomplete = 1;
                            }
                        }
                    }

                }
                if (myType == 'hidden' || myType == 'password' || myType == 'text' || myType == 'textarea' || myType == 'file') {
                    if (reqOption.value > '') {
                        requiredfieldscomplete = 1;
                    }
                }
                if (myType == 'select-one' || myType == 'select-multiple') {
                    if (reqOption.options[reqOption.selectedIndex].value > "") {
                        requiredfieldscomplete = 1;
                    }
                }
            }
        }
        if (requiredfieldscomplete == 0) {
            return reqOption;
        }
    }
    return null;
}

/*
 * classList.js: Cross-browser full element.classList implementation.
 * 2014-01-31
 *
 * By Eli Grey, http://eligrey.com
 * Public Domain.
 * NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.
 */

/*global self, document, DOMException */

/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js*/

if ("document" in self && !("classList" in document.createElement("_"))) {

    (function (view) {

        "use strict";

        if (!('Element' in view)) return;

        var
              classListProp = "classList"
            , protoProp = "prototype"
            , elemCtrProto = view.Element[protoProp]
            , objCtr = Object
            , strTrim = String[protoProp].trim || function () {
                return this.replace(/^\s+|\s+$/g, "");
            }
            , arrIndexOf = Array[protoProp].indexOf || function (item) {
                var
                      i = 0
                    , len = this.length
                ;
                for (; i < len; i++) {
                    if (i in this && this[i] === item) {
                        return i;
                    }
                }
                return -1;
            }
            // Vendors: please allow content code to instantiate DOMExceptions
            , DOMEx = function (type, message) {
                this.name = type;
                this.code = DOMException[type];
                this.message = message;
            }
            , checkTokenAndGetIndex = function (classList, token) {
                if (token === "") {
                    throw new DOMEx(
                          "SYNTAX_ERR"
                        , "An invalid or illegal string was specified"
                    );
                }
                if (/\s/.test(token)) {
                    throw new DOMEx(
                          "INVALID_CHARACTER_ERR"
                        , "String contains an invalid character"
                    );
                }
                return arrIndexOf.call(classList, token);
            }
            , ClassList = function (elem) {
                var
                      trimmedClasses = strTrim.call(elem.getAttribute("class") || "")
                    , classes = trimmedClasses ? trimmedClasses.split(/\s+/) : []
                    , i = 0
                    , len = classes.length
                ;
                for (; i < len; i++) {
                    this.push(classes[i]);
                }
                this._updateClassName = function () {
                    elem.setAttribute("class", this.toString());
                };
            }
            , classListProto = ClassList[protoProp] = []
            , classListGetter = function () {
                return new ClassList(this);
            }
        ;
        // Most DOMException implementations don't allow calling DOMException's toString()
        // on non-DOMExceptions. Error's toString() is sufficient here.
        DOMEx[protoProp] = Error[protoProp];
        classListProto.item = function (i) {
            return this[i] || null;
        };
        classListProto.contains = function (token) {
            token += "";
            return checkTokenAndGetIndex(this, token) !== -1;
        };
        classListProto.add = function () {
            var
                  tokens = arguments
                , i = 0
                , l = tokens.length
                , token
                , updated = false
            ;
            do {
                token = tokens[i] + "";
                if (checkTokenAndGetIndex(this, token) === -1) {
                    this.push(token);
                    updated = true;
                }
            }
            while (++i < l);

            if (updated) {
                this._updateClassName();
            }
        };
        classListProto.remove = function () {
            var
                  tokens = arguments
                , i = 0
                , l = tokens.length
                , token
                , updated = false
            ;
            do {
                token = tokens[i] + "";
                var index = checkTokenAndGetIndex(this, token);
                if (index !== -1) {
                    this.splice(index, 1);
                    updated = true;
                }
            }
            while (++i < l);

            if (updated) {
                this._updateClassName();
            }
        };
        classListProto.toggle = function (token, force) {
            token += "";

            var
                  result = this.contains(token)
                , method = result ?
                    force !== true && "remove"
                :
                    force !== false && "add"
            ;

            if (method) {
                this[method](token);
            }

            return typeof force === "boolean" ? force : !result;
        };
        classListProto.toString = function () {
            return this.join(" ");
        };

        if (objCtr.defineProperty) {
            var classListPropDesc = {
                get: classListGetter
                , enumerable: true
                , configurable: true
            };
            try {
                objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            } catch (ex) { // IE 8 doesn't support enumerable:true
                if (ex.number === -0x7FF5EC54) {
                    classListPropDesc.enumerable = false;
                    objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
                }
            }
        } else if (objCtr[protoProp].__defineGetter__) {
            elemCtrProto.__defineGetter__(classListProp, classListGetter);
        }

    }(self));

}

/*	messagebar.js || cauliturtle || The MIT License (MIT)
	------------------------------------------------------	*/
(function (global) {

    // extend 
    var extend = function (source, options) {
        for (var prop in options) {
            source[prop] = options[prop];
        }
        return source;
    };

    // clone 
    var clone = function (obj) {
        var tmp = {};
        for (var prop in obj) {
            tmp[prop] = obj[prop];
        }
        return tmp;
    };

    // simple escape function
    var escape = function (string) {
        var escape_map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;'
        };

        var escape_key = [];

        for (var symbol in escape_map) {
            escape_key.push(symbol);
        }

        var escape_regexp = new RegExp('[' + escape_key.join('') + ']', 'g');

        return ('' + string).replace(escape_regexp, function (match) {
            return escape_map[match];
        });
    };

    /**
     * Constructor
     *
     * You can create it with options
     *
     *	var msgBar = new MessageBar({
     *		close_delay:		5000, // close delay ms
     *		display_class:		'mb--messagebar--show', // we will add this class to make it display on user view
     *		disappear_class:	'mb--messagebar--hide', // add this class for disappear animation
     *		default_class:		'mb--messagebar', // default class for the message_dom
     *		is_html:			false, // is HTML message ?
     *	})
     * 
     */
    function MessageBar(options) {

        var default_setting = {
            close_delay: 5000,
            display_class: 'mb--messagebar--show',
            disappear_class: 'mb--messagebar--hide',
            default_class: 'mb--messagebar',
            is_html: false
        };

        this.setting = extend(default_setting, options);

        // Not a options
        this.is_showing = false;
        this.message_dom = null;
        this.initialized = false;
        this.self_timer = null;
    }

    /**
     * create a message dom for this instance
     */
    MessageBar.prototype.initialize = function () {
        this.message_dom = document.createElement('div');
        this.message_dom.classList.add(this.setting.default_class);

        var body_dom = document.getElementsByTagName('body')[0];
        body_dom.appendChild(this.message_dom);

        this.initialized = true;
    };

    /**
     * The general function for showing message
     * @param  string message
     * @param  mixed options same as the custructor options can be set here
     */
    MessageBar.prototype.show = function (message, options) {

        if (!this.initialized) {
            throw new Error('MessageBar is not initialized');
        }

        // if it is showing, force restore
        if (this.is_showing) {
            this.restore();
        }

        this.is_showing = true;

        // does it override local option?
        var local_option = extend(clone(this.setting), options);

        // is HTML ?
        if (local_option.is_html) {
            this.message_dom.innerHTML = message;
        } else {
            this.message_dom.innerHTML = escape(message);
        }

        // open and set a disappear class for current state
        if ('string' === typeof local_option.display_class) {
            local_option.display_class = [local_option.display_class];
        }

        for (var i in local_option.display_class) {
            this.message_dom.classList.add(local_option.display_class[i]);
        }
        this.message_dom.setAttribute('data-mb-disappear-class', local_option.disappear_class);

        this.self_timer = setTimeout(this.close.bind(this), local_option.close_delay);

    };

    /**
     * Close the message bar
     */
    MessageBar.prototype.close = function () {
        var that = this;
        var disappear_class = this.message_dom.getAttribute('data-mb-disappear-class');
        this.message_dom.classList.add(disappear_class);
        setTimeout(function () {
            that.restore();
        }, 250);
    };

    /**
     * restore will be fire whenever it close. It will restore all things to initialize state
     */
    MessageBar.prototype.restore = function () {
        this.is_showing = false;
        this.message_dom.innerHTML = '';
        // this.message_dom.removeEventListener('transitionend');
        this.message_dom.className = this.setting.default_class;
        this.message_dom.removeAttribute('data-mb-disappear-class');
        clearTimeout(this.self_timer);
        this.self_timer = null;
    };

    // Default type of alert
    // alert message bar
    MessageBar.prototype.alert = function (message) {
        this.show(message, {
            display_class: ['mb--messagebar--show', 'mb--messagebar--danger']
        });
    };

    // success message bar
    MessageBar.prototype.success = function (message) {
        this.show(message, {
            display_class: ['mb--messagebar--show', 'mb--messagebar--success']
        });
    };

    // warning message bar
    MessageBar.prototype.warning = function (message) {
        this.show(message, {
            display_class: ['mb--messagebar--show', 'mb--messagebar--warning']
        });
    };

    // exports to global
    global.MessageBar = MessageBar;

}).call(this, this);

function ExistsCreditCard(str) {
    var regExCC = new RegExp(/\b\d+[\.\ \-\d]+\d+\b/g);

    var matches;
    while ((matches = regExCC.exec(str)) !== null) {
        if (LuhnCheckCreditCard(matches[0]) != '')
            return true;
    }
    return false;
}

function LuhnCheckCreditCard(str) {

    var pattern = '^(?:' +
                  '4[0-9]{15}|4[0-9]{3}\\D\\d{4}\\D\\d{4}\\D\\d{4}|' + //Visa
                  '5[1-5][0-9]{14}|5[1-5]\\d{2}\\D\\d{4}\\D\\d{4}\\D\\d{4}|' + //MasterCard
                  '6(?:011|5[0-9][0-9])[0-9]{12}|6(?:011|5[0-9][0-9])[0-9]{12}|6(?:011|5[0-9][0-9])\\D\\d{4}\\D\\d{4}\\D\\d{4}|' +   //Discover
                  '3[47][0-9]{13}|3[47][0-9]{2}\\D\\d{6}\\D\\d{5}|' + //AMEX
                  '3(?:0[0-5]|[68][0-9])[0-9]{11}|3(?:0[0-5]|[68][0-9])[0-9]\\D\\d{6}\\D\\d{4}|' + //Diners Club
                  '((?:2131|1800|35\\d{3})\\d{11}|(?:2131|1800|35\\d{2})\\D\\d{4}\\D\\d{4}\\D\\d{4}))$' //JCB

    var regValidate = new RegExp(pattern, 'g');
    if (!str.match(regValidate))
        return '';

    var temp = String(str).replace(/[^\d]/g, ""); //Remove any non-digit character

    var luhnArr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    var counter = 0;
    var incNum;
    var odd = false;

    for (var i = temp.length - 1; i >= 0; --i) {
        incNum = parseInt(temp.charAt(i), 10);
        counter += (odd = !odd) ? incNum : luhnArr[incNum];
    }

    if (counter % 10 == 0)
        return temp;

    return '';
}



function isDate(dateStr) {
    dateStr = formatDate(dateStr, isLCID_DateFormatUS, 1)
    var datePat = /^(\d{1,2})(\/|-)(\d{1,2})(\/|-)(\d{4})$/;
    var matchArray = dateStr.match(datePat);

    if (matchArray == null) {
        return false;
    }

    month = matchArray[1];
    day = matchArray[3];
    year = matchArray[5];

    if (month < 1 || month > 12) {
        return false;
    }

    if (day < 1 || day > 31) {
        return false;
    }

    if ((month == 4 || month == 6 || month == 9 || month == 11) && day == 31) {
        return false;
    }

    if (month == 2) {
        var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
        if (day > 29 || (day == 29 && !isleap)) {
            return false;
        }
    }
    return true;
}


function formatDate(timestamp, isDateFormatUS, isConvert) {
    if (isDateFormatUS == true)
        return timestamp;

    if (isConvert) {
        timestamp = stringToDate(timestamp);
        return timestamp;
    }
    else {
        timestamp = new Date(timestamp);
        var d = timestamp.getDate().toString();
        var dd = (d.length === 2) ? d : "0" + d;
        var m = (timestamp.getMonth() + 1).toString();
        var mm = (m.length === 2) ? m : "0" + m;
        return (dd + "/" + mm + "/" + (timestamp.getFullYear()).toString());
    }
}

function stringToDate(_date) {
    _format = "dd/mm/yyyy"
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split("/");
    var dateItems = _date.split("/");
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var timestamp = new Date(dateItems[yearIndex], month, dateItems[dayIndex]);
    var d = timestamp.getDate().toString();
    var dd = (d.length === 2) ? d : "0" + d;
    var m = (timestamp.getMonth() + 1).toString();
    var mm = (m.length === 2) ? m : "0" + m;
    return (mm + "/" + dd + "/" + (timestamp.getFullYear()).toString());
}


function createCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}