

// If you have PHP you can set the post values like this
//var postState = '<?= $_POST["state"] ?>';
//var postCountry = '<?= $_POST["country"] ?>';
var postState = 'US';
var postCountry = 'FL';

// State table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//
var stateList = '\
US:AL:Alabama|\
US:AK:Alaska|\
CA:AB:Alberta|\
US:AZ:Arizona|\
US:AR:Arkansas|\
CA:BC:British Columbia|\
US:CA:California|\
US:CO:Colorado|\
US:CT:Connecticut|\
US:DE:Delaware|\
US:DC:District of Columbia|\
US:FL:Florida|\
US:GA:Georgia|\
US:HI:Hawaii|\
US:ID:Idaho|\
US:IL:Illinois|\
US:IN:Indiana|\
US:IA:Iowa|\
US:KS:Kansas|\
US:KY:Kentucky|\
US:LA:Louisiana|\
US:ME:Maine|\
CA:MB:Manitoba|\
US:MD:Maryland|\
US:MA:Massachusetts|\
US:MI:Michigan|\
US:MN:Minnesota|\
US:MS:Mississippi|\
US:MO:Missouri|\
US:MT:Montana|\
US:NE:Nebraska|\
US:NV:Nevada|\
CA:NB:New Brunswick|\
US:NH:New Hampshire|\
US:NJ:New Jersey|\
US:NM:New Mexico|\
US:NY:New York|\
CA:NL:Newfoundland and Labrador|\
US:NC:North Carolina|\
US:ND:North Dakota|\
CA:NT:Northwest Territories|\
CA:NS:Nova Scotia|\
CA:NU:Nunavut|\
US:OH:Ohio|\
US:OK:Oklahoma|\
CA:ON:Ontario|\
US:OR:Oregon|\
US:PA:Pennsylvania|\
CA:PE:Prince Edward Island|\
US:PR:Puerto Rico|\
CA:QC:Quebec|\
US:RI:Rhode Island|\
CA:SK:Saskatchewan|\
US:SC:South Carolina|\
US:SD:South Dakota|\
US:TN:Tennessee|\
US:TX:Texas|\
US:UT:Utah|\
US:VT:Vermont|\
US:VI:Virgin Islands|\
US:VA:Virginia|\
US:WA:Washington|\
US:WV:West Virginia|\
US:WI:Wisconsin|\
US:WY:Wyoming|\
CA:YT:Yukon Territory|\
';

// Country data table
//
// To edit the list, just delete a line or add a line. Order is important.
// The order displayed here is the order it appears on the drop down.
//

var countryList = '\
AF:Afghanistan|\
AX:Aland Islands|\
AL:Albania|\
DZ:Algeria|\
AS:American Samoa|\
AD:Andorra|\
AO:Angola|\
AI:Anguilla|\
AQ:Antarctica|\
AG:Antigua & Barbuda|\
AR:Argentina|\
AM:Armenia|\
AW:Aruba|\
AU:Australia|\
AT:Austria|\
AZ:Azerbaijan|\
AP:Azores|\
BS:Bahamas|\
BH:Bahrain|\
BD:Bangladesh|\
BB:Barbados|\
BY:Belarus|\
BE:Belgium|\
BZ:Belize|\
BJ:Benin|\
BM:Bermuda|\
BT:Bhutan|\
BO:Bolivia|\
BL:Bonaire|\
BA:Bosnia|\
BW:Botswana|\
BV:Bouvet Island|\
BR:Brazil|\
VG:British Virgin Islands|\
BN:Brunei|\
BG:Bulgaria|\
BF:Burkina Faso|\
BI:Burundi|\
KH:Cambodia|\
CM:Cameroon|\
CA:Canada|\
IC:Canary Islands|\
CV:Cape Verde Islands|\
KY:Cayman Islands|\
CF:Central African Republic|\
TD:Chad|\
GB-CHA:Channel Islands|\
CL:Chile|\
CN:China|\
CX:Christmas Island|\
CC:Cocos (keeling) Islands|\
CO:Colombia|\
CG:Congo|\
CK:Cook Islands|\
CR:Costa Rica|\
CI:Cote Divoire|\
HR:Croatia|\
CU:Cuba|\
CW:Curacao|\
CY:Cyprus|\
CZ:Czech Republic|\
DK:Denmark|\
DJ:Djibouti|\
DM:Dominica|\
DO:Dominican Republic|\
EC:Ecuador|\
EG:Egypt|\
SV:El Salvador|\
GQ:Equatorial Guinea|\
ER:Eritrea|\
EE:Estonia|\
ET:Ethiopia|\
FO:Faeroe Islands|\
FK:Falkland Islands (Malvinas)|\
FJ:Fiji|\
FI:Finland|\
FR:France|\
GF:French Guiana|\
PF:French Polynesia|\
TF:French Southern Territories|\
GA:Gabon|\
GM:Gambia|\
GE:Georgia|\
DE:Germany|\
GH:Ghana|\
GI:Gibraltar|\
GR:Greece|\
GL:Greenland|\
GD:Grenada|\
GP:Guadeloupe|\
GU:Guam|\
GT:Guatemala|\
GG:Guernsey|\
GN:Guinea|\
GW:Guinea-Bissau|\
GY:Guyana|\
HT:Haiti|\
HM:Heard Island and Mcdonald Islands|\
HO:Holland|\
VA:Holy See (Vatican City State)|\
HN:Honduras|\
HK:Hong Kong|\
HU:Hungary|\
IS:Iceland|\
IN:India|\
ID:Indonesia|\
IR:Iran|\
IQ:Iraq|\
IE:Ireland|\
IM:Isle of Man|\
IL:Israel|\
IT:Italy|\
JM:Jamaica|\
JP:Japan|\
JE:Jersey|\
JO:Jordan|\
KZ:Kazakhstan|\
KE:Kenya|\
KI:Kiribati|\
KP:Korea, Democratic People\'s Republic of|\
KR:Korea, Republic of|\
KO:Kosrae|\
KW:Kuwait|\
KG:Kyrgyzstan|\
LA:Laos|\
LV:Latvia|\
LB:Lebanon|\
LS:Lesotho|\
LR:Liberia|\
LY:Libyan Arab Jamahiriya|\
LI:Liechtenstein|\
LT:Lithuania|\
LU:Luxembourg|\
MO:Macau|\
MK:Macedonia, Republic of|\
MG:Madagascar|\
MW:Malawi|\
MY:Malaysia|\
MV:Maldives|\
ML:Mali|\
MT:Malta|\
MH:Marshall Islands|\
MQ:Martinique|\
MR:Mauritania|\
MU:Mauritius|\
YT:Mayotte|\
MX:Mexico|\
FM:Micronesia, Federated States of|\
MD:Moldova|\
MC:Monaco|\
MN:Mongolia|\
ME:Montenegro, Republic of|\
MS:Montserrat|\
MA:Morocco|\
MZ:Mozambique|\
MM:Myanmar|\
NA:Namibia|\
NR:Nauru|\
NP:Nepal|\
NL:Netherlands|\
AN:Netherlands Antilles|\
NC:New Caledonia|\
NZ:New Zealand|\
NI:Nicaragua|\
NE:Niger|\
NG:Nigeria|\
NU:Niue|\
NF:Norfolk Island|\
NB:Northern Ireland|\
MP:Northern Mariana Islands|\
NO:Norway|\
OM:Oman|\
PK:Pakistan|\
PW:Palau|\
PS:Palestinian Territory, Occupied|\
PA:Panama|\
PG:Papua New Guinea|\
PY:Paraguay|\
PE:Peru|\
PH:Philippines|\
PN:Pitcairn Island|\
PL:Poland|\
PO:Ponape|\
PT:Portugal|\
PR:Puerto Rico|\
QA:Qatar|\
RE:Reunion|\
RO:Romania|\
RT:Rota|\
RU:Russia|\
RW:Rwanda|\
SS:Saba|\
SP:Saipan|\
SM:San Marino|\
ST:Sao Tome and Principe|\
SA:Saudi Arabia|\
SF:Scotland|\
SN:Senegal|\
RS:Serbia, Republic of|\
SC:Seychelles|\
SL:Sierra Leone|\
SG:Singapore|\
SK:Slovakia|\
SI:Slovenia|\
SB:Solomon Islands|\
SO:Somalia|\
ZA:South Africa|\
ES:Spain|\
LK:Sri Lanka|\
NT:St. Barthelemy|\
SW:St. Christopher|\
EU:St. Eustatius|\
UV:St. John|\
KN:St. Kitts & Nevis|\
LC:St. Lucia|\
SX:St. Maarten|\
MF:St. Martin|\
VL:St. Thomas|\
VC:St. Vincent & the Grenadines|\
SD:Sudan|\
SR:Suriname|\
SZ:Swaziland|\
SE:Sweden|\
CH:Switzerland|\
SY:Syrian Arab Republic|\
TA:Tahiti|\
TW:Taiwan|\
TJ:Tajikistan|\
TZ:Tanzania|\
TH:Thailand|\
TL:Timor-Leste|\
TI:Tinian|\
TG:Togo|\
TO:Tonga|\
TT:Trinidad and Tobago|\
TU:Truk|\
TN:Tunisia|\
TR:Turkey|\
TM:Turkmenistan|\
TC:Turks & Caicos Islands|\
TV:Tuvalu|\
UG:Uganda|\
UA:Ukraine|\
UI:Union Island|\
AE:United Arab Emirates|\
GB:United Kingdom|\
US:United States|\
UY:Uruguay|\
VI:US Virgin Islands|\
UZ:Uzbekistan|\
VU:Vanuatu|\
VE:Venezuela|\
VN:Vietnam|\
VR:Virgin Gorda|\
WK:Wake Island|\
WL:Wales|\
WF:Wallis and Futuna|\
EH:Western Sahara|\
WS:Western Samoa|\
YA:Yap|\
YE:Yemen|\
ZM:Zambia|\
ZW:Zimbabwe|\
';

countryList = countryList.substring(0, countryList.length-1) // Deleting the last "|" character

function get_Element(i)
{
	return document.getElementById(i) || document.getElementsByName(i).item(0);
}

function TrimString(sInString) {
  if ( sInString ) {
    sInString = sInString.replace( /^\s+/g, "" );// strip leading
    return sInString.replace( /\s+$/g, "" );// strip trailing
  }
}

// Populates the country selected with the counties from the country list

function populateCountry(defaultCountry,countryfieldname) {
  if (defaultCountry=="") {defaultCountry="US"}
  
  var countryLineArray = countryList.split('|');  // Split into lines
  var selObj = get_Element(countryfieldname);
  if (!selObj) return;
  
  selObj.options[0] = new Option('','');
  selObj.selectedIndex = 0;
  


	for (var loop = 0; loop < countryLineArray.length; loop++) {
		lineArray = countryLineArray[loop].split(':');
		countryCode  = TrimString(lineArray[0]);
		countryName  = TrimString(lineArray[1]);
		
		if ( countryCode != '' ) { selObj.options[loop] = new Option(countryName, countryCode); }		
		if ( defaultCountry == countryCode ) { selObj.selectedIndex = loop; }
	}
}


function populateState(statefieldname,countryfieldname,state1,optionalCreateTextField,strPlaceHolder) {
	//optionalCreateTextField = optional parameter, true/false. When a country doesn't have state, it'll determine if the code creates a text field for the state or just let the dropdown empty.
	
	var isOpera = false, isIE = false;  
	var strClassName;
    var originalTabIndex;

	if(typeof(window.opera) != 'undefined')
		{isOpera = true;}  
	if(!isOpera && (navigator.userAgent.indexOf('Internet Explorer') > 0 || navigator.userAgent.indexOf('MSIE') > 0) && navigator.userAgent.indexOf('MSIE 9') < 0 && navigator.userAgent.indexOf('MSIE 10') < 0)
		{isIE = true;}
	
	if (state1 == undefined) { state1 = ''; }

	if (strPlaceHolder == undefined) { strPlaceHolder = '';}
	
	postCountry=get_Element(countryfieldname);
    if (!postCountry) return;
	postCountry=postCountry.value;

	var selObj = get_Element(statefieldname);
    if (!selObj) return;
	var foundState = false;

    originalTabIndex = selObj.getAttribute("tabindex");

	// Empty options just in case new drop down is shorter
	if ( selObj.type == 'select-one' ) {

      selObj.options.length = 0;

     // selObj.options[0] = new Option('Select State','');
     // selObj.selectedIndex = 0;
   }
   // Populate the drop down with states from the selected country
   //
   var stateLineArray   = stateList.split("|");        // Split into lines
   var optionCntr = 0;
   for (var loop = 0; loop < stateLineArray.length; loop++) {

      lineArray = stateLineArray[loop].split(":");
      countryCode  = TrimString(lineArray[0]);
      stateCode    = TrimString(lineArray[1]);
      stateName    = TrimString(lineArray[2]);

      if ( get_Element(countryfieldname).value == countryCode && countryCode != '' ) {

         // If it's a input element, change it to a select
         //
         if ( selObj.type == 'text' ) {
			
			strClassName = selObj.className;
			
            parentObj = get_Element(statefieldname).parentNode;

			// Create the Input Field
			if(!isIE){    
				var inputSel = document.createElement("SELECT");
				inputSel.setAttribute("name", statefieldname);
				if (strClassName != 'undefined' && strClassName != '')
					inputSel.setAttribute("class",strClassName);
				else
					inputSel.setAttribute("class","txtBoxStyle");
					inputSel.setAttribute("id", statefieldname); 
			} 
			else 
			{    
				var inputSel = document.createElement("<select name="+statefieldname+" id="+statefieldname+">");
				if (strClassName != 'undefined' && strClassName != '')
					inputSel.setAttribute("className",strClassName);
				else
					inputSel.setAttribute("className","txtBoxStyle");					
			}
            inputSel.setAttribute("tabindex", originalTabIndex); 
            parentObj.insertBefore(inputSel, selObj.nextSibling);
            parentObj.removeChild(selObj);
            selObj = get_Element(statefieldname);
         }

         if (optionCntr == 0)
         {
            selObj.options[optionCntr] = new Option(strPlaceHolder,'');
            selObj.selectedIndex = optionCntr;
            optionCntr++;
        }

         if ( stateCode != '' ) {
            selObj.options[optionCntr] = new Option(stateName, stateCode);
         }
         // See if it's selected from a previous post
         //
         if ( stateCode == state1 && countryCode == postCountry ) {

            selObj.selectedIndex = optionCntr;
         }
         foundState = true;
         optionCntr++
      }
   }
   // If the country has no states, change the select to a text box
   //
   if ( ! foundState ) {

		if (postCountry == 'ALL')
		{
			//var selObj = get_Element(statefieldname);
			selObj.options.length = 0;
			selObj.options[0] = new Option('ALL','ALL');
			selObj.selectedIndex = 0;
		}
		else
		{
			if (optionalCreateTextField == undefined)
				var createText = true;
			else
				var createText = optionalCreateTextField;
			
			if (createText)
			{
				strClassName = selObj.className;
				parentObj = get_Element(statefieldname).parentNode;
			 
				// Create the Input Field
				if(!isIE){
					var inputEl = document.createElement("input");
					inputEl.setAttribute("name", statefieldname);
					if (strClassName != 'undefined' && strClassName != '')
						inputEl.setAttribute("class",strClassName);
					else
						inputEl.setAttribute("class","txtBoxStyle");
					inputEl.setAttribute("id", statefieldname); 
					inputEl.setAttribute("placeholder", strPlaceHolder);
				} 
				else 
				{    
					var inputEl = document.createElement("<input name=\""+statefieldname+"\" id=\""+statefieldname+"\" />");
					if (strClassName != 'undefined' && strClassName != '')
						inputEl.setAttribute("className",strClassName);
					else
						inputEl.setAttribute("className","txtBoxStyle");					
				}  
                inputEl.setAttribute("tabindex", originalTabIndex); 
				inputEl.setAttribute("type", "text"); 
				inputEl.setAttribute("size", 20); 
				inputEl.setAttribute("value", state1); 
                parentObj.insertBefore(inputEl, selObj.nextSibling);
                parentObj.removeChild(selObj);
			}
		}
   }
   
}

function insertCountry(strCountryName,countryfieldname) {
	var selObj = get_Element(countryfieldname);
    if (!selObj) return;
	selObj.options[selObj.options.length] = new Option('ALL','ALL');
	selObj.selectedIndex = selObj.options.length-1;
}	

function initCountry(country,state1,statefieldname,countryfieldname,strPlaceHolder) {
  populateCountry(country,countryfieldname);
  populateState(statefieldname,countryfieldname,state1,true,strPlaceHolder);
}


function GetValue(formx,name1) {
//alert(name1);
var i;
    for(i=0;i<formx.elements.length;i++) {
      if(formx.elements[i].name==name1) {
        return formx.elements[i].value;
      }
    } 
  }
