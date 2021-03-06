//TYPEWRITER EFFECT FOR MAIN LANDING PAGE
//==========================================================
//==========================================================
//TYPEWRITER EFFECT
//=====================================================================================
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };


//AWESOMPLETE
//================================================================================================================================
//City to airport code translation
const cityToAirport={
    "Aberdeen, SD":"ABR","Abilene, TX":"ABI","Akron, OH":"CAK","Alamosa, CO":"ALS","Albany, GA":"ABY","Albany, NY":"ALB","Albuquerque, NM":"ABQ","Alexandria, LA":"AEX","Allentown, PA":"ABE","Alliance, NE":"AIA","Alpena, MI":"APN","Altoona, PA":"AOO","Amarillo, TX":"AMA","Anchorage, AK":"ANC","Appleton, WI":"ATW","Asheville, NC":"AVL","Aspen, CO":"ASE","Athens, GA":"AHN","Atlanta, GA":"ATL","Atlantic City, NJ":"ACY","Augusta, GA":"AGS","Augusta, ME":"AUG","Austin, TX":"AUS","Bagotville, PQ":"YBG","Baie-Comeau, PQ":"YBC","Bakersfield, CA":"BFL","Baltimore, MD":"BWI","Bangor, ME":"BGR","Bar Harbor, ME":"BHB","Barrow, AK":"BRW","Baton Rouge, LA":"BTR","Beaumont, TX":"BPT","Beckley, WV":"BKW","Bedford, MA":"BED","Bellingham, WA":"BLI","Bemidji, MN":"BJI","Bethel, AK":"BET","Bettles, AK":"BTT","Billings, MT":"BIL","Binghamton, NY":"BGM","Birmingham, AL":"BHM","Bismarck, ND":"BIS","Bloomington, IL":"BMI","Bloomington, IN":"BMG","Bluefield, WV":"BLF","Boise, ID":"BOI","Boston, MA":"BOS","Bozeman, MT":"BZN","Brookings, SD":"BKX","Brownsville, TX":"BRO","Brunswick, GA":"BQK","Buffalo, NY":"BUF","Burbank, CA":"BUR","Burlington, IA":"BRL","Burlington, MA":"BBF","Burlington, VT":"BTV","Butte, MT":"BTM","Cape Girardeau, MO":"CGI","Carlsbad, CA":"CLD","Carlsbad, NM":"CNM","Casper, WY":"CPR","Cedar Rapids, IA":"CID","Champaign, IL":"CMI","Charleston, SC":"CHS","Charleston, WV":"CRW","Charlotte, NC":"CLT","Charlottesville, VA":"CHO","Chattanooga, TN":"CHA","Cheyenne, WY":"CYS","Chicago, IL MDW":"MDW","Chicago, IL ORD":"ORD","Chicago, IL CHI":"CHI","Chico, CA":"CIC","Cincinnati, OH":"CVG","Clarksburg, WV":"CKB","Cleveland, OH":"CLE","Clovis, NM":"CVN","Cody, WY":"COD","College Station, TX":"CLL","Colorado Springs, CO":"COS","Columbia, MO":"COU","Columbia, SC":"CAE","Columbus, GA":"CSG","Columbus, IN":"CLU","Columbus, MS":"GTR","Columbus, NE":"OLU","Columbus, OH":"CMH","Cordova, AK":"CDV","Corpus Christi, TX":"CRP","Dallas, TX DFW":"DFW","Dallas, TX DAL":"DAL","Dayton, OH":"DAY","Daytona Beach, FL":"DAB","Decatur, IL":"DEC","Denver, CO":"DEN","Des Moines, IA":"DSM","Detroit, MI DTW":"DTW","Detroit, MI DTT":"DTT","Devils Lake, ND":"DVL","Dickinson, ND":"DIK","Dillingham, AK":"DLG","Dodge City, KS":"DDC","Dothan, AL":"DHN","Dryden, ON":"YHD","Du Bois, PA":"DUJ","Dubuque, IA":"DBQ","Duluth, MN":"DLH","Durango, CO":"DRO","Dutch Harbor, Un Island, AK":"DUT","Eau Claire, WI":"EAU","Eek, AK":"EEK","El Centro, CA":"IPL","El Dorado, AR":"ELD","El Paso, TX":"ELP","Elko, NV":"EKO","Elmira, NY":"ELM","Enid, OK":"WDG","Erie, PA":"ERI","Escanaba, MI":"ESC","Eugene, OR":"EUG","Eureka, CA":"ACV","Evansville, IN":"EVV","Fairbanks, AK":"FAI","Fargo, ND":"FAR","Farmington, NM":"FMN","Fayetteville, AR":"XNA","Fayetteville, NC":"FAY","Flagstaff, AZ":"FLG","Flint, MI":"FNT","Florence, SC":"FLO","Fort Dodge, IA":"FOD","Fort Lauderdale, FL":"FLL","Fort Leonard Wood, MO":"TBN","Fort Myers, FL":"RSW","Fort Smith, AR":"FSM","Fort Walton Beach, FL":"VPS","Fort Wayne, IN":"FWA","Fort Yukon, AK":"FYU","Fresno, CA":"FAT","Gainesville, FL":"GNV","Garden City, KS":"GCK","Gillette, WY":"GCC","Glendive, MT":"GDV","Grand Forks, ND":"GFK","Grand Island, NE":"GRI","Grand Junction, CO":"GJT","Grand Rapids, MI":"GRR","Great Bend, KS":"GBD","Great Falls, MT":"GTF","Green Bay, WI":"GRB","Greenbrier, WV":"LWB","Greensboro, NC":"GSO","Greenville, MS":"GLH","Greenville, NC":"PGV","Greenville, SC":"GSP","Gulfport, MS":"GPT","Gunnison, CO":"GUC","Hagerstown, MD":"HGR","Hana, Maui, HI":"HNM","Hancock, MI":"CMX","Harlingen, TX":"HRL","Harrisburg, PA":"MDT","Harrison, AR":"HRO","Hartford, CT":"BDL","Havre, MT":"HVR","Hays, KS":"HYS","Helena, MT":"HLN","Hibbing, MN":"HIB","Hilo, Hawaii":"Big","Hilton Head Island, SC":"HHH","Hobbs, NM":"HOB","Homer, AK":"HOM","Honolulu, Oahu, HI":"HNL","Hoolehua, Molokai, HI":"MKK","Hot Springs, AR":"HOT","Houston, TX IAH":"IAH","Houston, TX HOU":"HOU","Houston, TX EFD":"EFD","Huntington, WV":"HTS","Huntsville, AL":"HSV","Huron, SD":"HON","Hyannis, MA":"HYA","Idaho Falls, ID":"IDA","Indianapolis, IN":"IND","International Falls, MN":"INL","Inyokern, CA":"IYK","Iron Mountain, MI":"IMT","Ironwood, MI":"IWD","Islip, NY":"ISP","Ithaca, NY":"ITH","Jackson Hole, WY":"JAC","Jackson, MS":"JAN","Jackson, TN":"MKL","Jacksonville, FL":"JAX","Jacksonville, NC":"OAJ","Jamestown, ND":"JMS","Jamestown, NY":"JHW","Johnstown, PA":"JST","Jonesboro, AR":"JBR","Joplin, MO":"JLN","Juneau, AK":"JNU","Kahului, Maui, HI":"OGG","Kailua-Kona, Hawaii":"Big","Kalamazoo, MI":"AZO","Kalaupapa, Molokai, HI":"LUP","Kalispell, MT":"FCA","Kamuela, Hawaii":"Big","Kansas City, MO":"MCI","Kapalua, Maui, HI":"JHM","Kearney, NE":"EAR","Kenai, AK":"ENA","Ketchikan, AK":"KTN","Key West, FL":"EYW","Killeen, TX":"GRK","King Salmon, AK":"AKN","Kingman, AZ":"IGM","Kirksville, MO":"IRK","Klamath Falls, OR":"LMT","Knoxville, TN":"TYS","Kodiak, AK":"ADQ","La Crosse, WI":"LSE","Lafayette, LA":"LFT","Lake Charles, LA":"LCH","Lake Havasu City, AZ":"HII","Lanai City, Lanai, HI":"LNY","Lancaster, PA":"LNS","Lansing, MI":"LAN","Laramie, WY":"LAR","Laredo, TX":"LRD","Las Cruces, NM":"LRU","Las Vegas, NV":"LAS","Latrobe, PA":"LBE","Laurel, MS":"PIB","Lawton, OK":"LAW","Lebanon, NH":"LEB","Lewiston, ID":"LWS","Lewiston, ME":"LEW","Lewistown, MT":"LWT","Lexington, KY":"LEX","Liberal, KS":"LBL","Lihue, Kauai, HI":"LIH","Lincoln, NE":"LNK","Little Rock, AR":"LIT","Long Beach, CA":"LGB","Longview, TX":"GGG","Los Angeles, CA QLA":"QLA","Los Angeles, CA LAX":"LAX","Louisville, KY, USA":"SDF","Lubbock, TX":"LBB","Lynchburg, VA":"LYH","Macon, GA":"MCN","Madison, WI":"MSN","Manchester, NH":"MHT","Manhattan, KS":"MHK","Manistee, MI":"MBL","Marion, IL":"MWA","Marquette, MI":"MQT","Martha's Vineyard, MA":"MVY","Mason City, IA":"MCW","Massena, NY":"MSS","McAllen, TX":"MFE","McCook, NE":"MCK","Medford, OR":"MFR","Melbourne, FL":"MLB","Memphis, TN":"MEM","Meridian, MS":"MEI","Miami, FL":"MIA","Midland, TX":"MAF","Miles City, MT":"MLS","Milwaukee, WI":"MKE","Minneapolis, MN":"MSP","Minot, ND":"MOT","Missoula, MT":"MSO","Mobile, AL":"MOB","Modesto, CA":"MOD","Moline, IL":"MLI","Monroe, LA":"MLU","Monterey, CA":"MRY","Montgomery, AL":"MGM","Montrose, CO":"MTJ","Morgantown, WV":"MGW","Moses Lake, WA":"MWH","Muscle Shoals, AL":"MSL","Muskegon, MI":"MKG","Myrtle Beach, SC":"MYR","Nantucket, MA":"ACK","Naples, FL":"APF","Nashville, TN":"BNA","New Bern, NC":"EWN","New Haven, CT":"HVN","New Orleans, LA":"MSY","New York, NY JFK":"JFK","New York, NY NYC":"NYC","New York, NY LGA":"LGA","Newark, NJ":"EWR","Newburgh, NY":"SWF","Newport News, VA":"PHF","Nome, AK":"OME","Norfolk, VA":"ORF","North Bend, OR":"OTH","North Platte, NE":"LBF","Oakland, CA":"OAK","Ogdensburg, NY":"OGS","Oklahoma City, OK":"OKC","Omaha, NE":"OMA","Ontario, CA":"ONT","Orange County, CA":"SNA","Orlando, FL":"MCO","Oshkosh, WI":"OSH","Owensboro, KY":"OWB","Oxnard, CA":"OXR","Paducah, KY":"PAH","Page, AZ":"PGA","Palm Springs, CA":"PSP","Panama City, FL":"PFN","Parkersburg, WV":"PKB","Pasco, WA":"PSC","Pellston, MI":"PLN","Pendleton, OR":"PDT","Pensacola, FL":"PNS","Peoria, IL":"PIA","Philadelphia, PA":"PHL","Phoenix, AZ":"PHX","Pierre, SD":"PIR","Pinehurst, NC":"SOP","Pittsburgh, PA":"PIT","Pocatello, ID":"PIH","Ponca City, OK":"PNC","Portland, ME":"PWM","Portland, OR":"PDX","Portsmouth, NH":"PSM","Prescott, AZ":"PRC","Presque Isle, ME":"PQI","Providence, RI":"PVD","Provincetown, MA":"PVC","Pueblo, CO":"PUB","Pullman, WA":"PUW","Quincy, IL":"UIN","Raleigh, NC":"RDU","Rapid City, SD":"RAP","Redding, CA":"RDD","Redmond, OR":"RDM","Reno, NV":"RNO","Rhinelander, WI":"RHI","Richmond, VA":"RIC","Riverton, WY":"RIW","Roanoke, VA":"ROA","Rochester, MN":"RST","Rochester, NY":"ROC","Rock Springs, WY":"RKS","Rockford, IL":"RFD","Rockland, ME":"RKD","Roswell, NM":"ROW","Rutland, VT":"RUT","Sacramento, CA":"SMF","Saginaw, MI":"MBS","Salina, KS":"SLN","Salisbury, MD":"SBY","Salt Lake City, UT":"SLC","San Angelo, TX":"SJT","San Antonio, TX":"SAT","San Diego, CA":"SAN","San Francisco, CA":"QSF","San Francisco, CA":"SFO","San Jose, CA":"SJC","San Luis Obispo, CA":"SBP","Sand Point, AK":"SDP","Santa Barbara, CA":"SBA","Santa Fe, NM":"SAF","Santa Maria, CA":"SMX","Santa Rosa, CA":"STS","Saranac Lake, NY":"SLK","Sarasota, FL":"SRQ","Sault Ste. Marie, MI":"CIU","Savannah, GA":"SAV","Scottsbluff, NE":"BFF","Seattle, WA":"SEA","Shenandoah Valley Airport, VA":"SHD","Sheridan, WY":"SHR","Shreveport, LA":"SHV","Sidney, MT":"SDY","Silver City, NM":"SVC","Sioux City, IA":"SUX","Sioux Falls, SD":"FSD","Sitka, AK":"SIT","Skagway, AK":"SGY","South Bend, IN":"SBN","Spokane, WA":"GEG","Springfield, IL":"SPI","Springfield, MA":"CEF","Springfield, MO":"SGF","Springfield, VT":"VSF","St. Cloud, MN":"STC","St. George, UT":"SGU","St. Louis, MO":"STL","St. Petersburg, FL":"PIE","State College, PA":"SCE","Steamboat Springs, CO":"SBS","Sun Valley, ID":"SUN","Syracuse, NY":"SYR","Tallahassee, FL":"TLH","Tampa, FL":"TPA","Telluride, CO":"TEX","Texarkana, AR":"TXK","Thief River Falls, MN":"TVF","Toksook Bay, AK":"OOK","Toledo, OH":"TOL","Topeka, KS":"TOP","Traverse City, MI":"TVC","Trenton, NJ":"TTN","Tri-City Airport, TN":"TRI","Tucson, AZ":"TUS","Tulsa, OK":"TUL","Tupelo, MS":"TUP","Twin Falls, ID":"TWF","Tyler, TX":"TYR","Unalakleet, AK":"UNK","Vail, CO":"EGE","Valdez, AK":"VDZ","Valdosta, GA":"VLD","Victoria, TX":"VCT","Visalia, CA":"VIS","Waco, TX":"ACT","Walla Walla, WA":"ALW","Washington DC IAD":"IAD","Washington DC DCA":"DCA","Washington DC WAS":"WAS","Waterloo, IA":"ALO","Watertown, NY":"ART","Watertown, SD":"ATY","Wausau, WI":"CWA","Wenatchee, WA":"EAT","West Palm Beach, FL":"PBI","West Yellowstone, MT":"WYS","White Plains, NY":"HPN","Wichita Falls, TX":"SPS","Wichita, KS":"ICT","Wilkes-Barre, PA":"AVP","Williamsport, PA":"IPT","Williston, ND":"ISN","Wilmington, DE":"ILG","Wilmington, NC":"ILM","Wolf Point, MT":"OLF","Worland, WY":"WRL","Wrangell, AK":"WRG","Yakima, WA":"YKM","Yakutat, AK":"YAK","Yuma, AZ":"YUM",
};
//List of U.S. cities with airports
const cities=["Aberdeen, SD","Abilene, TX","Akron, OH","Alamosa, CO","Albany, GA","Albany, NY","Albuquerque, NM","Alexandria, LA","Allentown, PA","Alliance, NE","Alpena, MI","Altoona, PA","Amarillo, TX","Anchorage, AK","Appleton, WI","Asheville, NC","Aspen, CO","Athens, GA","Atlanta, GA","Atlantic City, NJ","Augusta, GA","Augusta, ME","Austin, TX","Bagotville, PQ","Baie-Comeau, PQ","Bakersfield, CA","Baltimore, MD","Bangor, ME","Bar Harbor, ME","Barrow, AK","Baton Rouge, LA","Beaumont, TX","Beckley, WV","Bedford, MA","Bellingham, WA","Bemidji, MN","Bethel, AK","Bettles, AK","Billings, MT","Binghamton, NY","Birmingham, AL","Bismarck, ND","Bloomington, IL","Bloomington, IN","Bluefield, WV","Boise, ID","Boston, MA","Bozeman, MT","Brookings, SD","Brownsville, TX","Brunswick, GA","Buffalo, NY","Burbank, CA","Burlington, IA","Burlington, MA","Burlington, VT","Butte, MT","Cape Girardeau, MO","Carlsbad, CA","Carlsbad, NM","Casper, WY","Cedar Rapids, IA","Champaign, IL","Charleston, SC","Charleston, WV","Charlotte, NC","Charlottesville, VA","Chattanooga, TN","Cheyenne, WY","Chicago, IL MDW","Chicago, IL ORD","Chicago, IL CHI","Chico, CA","Cincinnati, OH","Clarksburg, WV","Cleveland, OH","Clovis, NM","Cody, WY","College Station, TX","Colorado Springs, CO","Columbia, MO","Columbia, SC","Columbus, GA","Columbus, IN","Columbus, MS","Columbus, NE","Columbus, OH","Cordova, AK","Corpus Christi, TX","Dallas, TX DFW","Dallas, TX DAL","Dayton, OH","Daytona Beach, FL","Decatur, IL","Denver, CO","Des Moines, IA","Detroit, MI DTW","Detroit, MI DTT","Devils Lake, ND","Dickinson, ND","Dillingham, AK","Dodge City, KS","Dothan, AL","Dryden, ON","Du Bois, PA","Dubuque, IA","Duluth, MN","Durango, CO","Dutch Harbor, Un Island, AK","Eau Claire, WI","Eek, AK","El Centro, CA","El Dorado, AR","El Paso, TX","Elko, NV","Elmira, NY","Enid, OK","Erie, PA","Escanaba, MI","Eugene, OR","Eureka, CA","Evansville, IN","Fairbanks, AK","Fargo, ND","Farmington, NM","Fayetteville, AR","Fayetteville, NC","Flagstaff, AZ","Flint, MI","Florence, SC","Fort Dodge, IA","Fort Lauderdale, FL","Fort Leonard Wood, MO","Fort Myers, FL","Fort Smith, AR","Fort Walton Beach, FL","Fort Wayne, IN","Fort Yukon, AK","Fresno, CA","Gainesville, FL","Garden City, KS","Gillette, WY","Glendive, MT","Grand Forks, ND","Grand Island, NE","Grand Junction, CO","Grand Rapids, MI","Great Bend, KS","Great Falls, MT","Green Bay, WI","Greenbrier, WV","Greensboro, NC","Greenville, MS","Greenville, NC","Greenville, SC","Gulfport, MS","Gunnison, CO","Hagerstown, MD","Hana, Maui, HI","Hancock, MI","Harlingen, TX","Harrisburg, PA","Harrison, AR","Hartford, CT","Havre, MT","Hays, KS","Helena, MT","Hibbing, MN","Hilo, Hawaii","Hilton Head Island, SC","Hobbs, NM","Homer, AK","Honolulu, Oahu, HI","Hoolehua, Molokai, HI","Hot Springs, AR","Houston, TX IAH","Houston, TX HOU","Houston, TX EFD","Huntington, WV","Huntsville, AL","Huron, SD","Hyannis, MA","Idaho Falls, ID","Indianapolis, IN","International Falls, MN","Inyokern, CA","Iron Mountain, MI","Ironwood, MI","Islip, NY","Ithaca, NY","Jackson Hole, WY","Jackson, MS","Jackson, TN","Jacksonville, FL","Jacksonville, NC","Jamestown, ND","Jamestown, NY","Johnstown, PA","Jonesboro, AR","Joplin, MO","Juneau, AK","Kahului, Maui, HI","Kailua-Kona, Hawaii","Kalamazoo, MI","Kalaupapa, Molokai, HI","Kalispell, MT","Kamuela, Hawaii","Kansas City, MO","Kapalua, Maui, HI","Kearney, NE","Kenai, AK","Ketchikan, AK","Key West, FL","Killeen, TX","King Salmon, AK","Kingman, AZ","Kirksville, MO","Klamath Falls, OR","Knoxville, TN","Kodiak, AK","La Crosse, WI","Lafayette, LA","Lake Charles, LA","Lake Havasu City, AZ","Lanai City, Lanai, HI","Lancaster, PA","Lansing, MI","Laramie, WY","Laredo, TX","Las Cruces, NM","Las Vegas, NV","Latrobe, PA","Laurel, MS","Lawton, OK","Lebanon, NH","Lewiston, ID","Lewiston, ME","Lewistown, MT","Lexington, KY","Liberal, KS","Lihue, Kauai, HI","Lincoln, NE","Little Rock, AR","Long Beach, CA","Longview, TX","Los Angeles, CA QLA","Los Angeles, CA LAX","Louisville, KY, USA","Lubbock, TX","Lynchburg, VA","Macon, GA","Madison, WI","Manchester, NH","Manhattan, KS","Manistee, MI","Marion, IL","Marquette, MI","Martha's Vineyard, MA","Mason City, IA","Massena, NY","McAllen, TX","McCook, NE","Medford, OR","Melbourne, FL","Memphis, TN","Meridian, MS","Miami, FL","Midland, TX","Miles City, MT","Milwaukee, WI","Minneapolis, MN","Minot, ND","Missoula, MT","Mobile, AL","Modesto, CA","Moline, IL","Monroe, LA","Monterey, CA","Montgomery, AL","Montrose, CO","Morgantown, WV","Moses Lake, WA","Muscle Shoals, AL","Muskegon, MI","Myrtle Beach, SC","Nantucket, MA","Naples, FL","Nashville, TN","New Bern, NC","New Haven, CT","New Orleans, LA","New York, NY JFK","New York, NY NYC","New York, NY LGA","Newark, NJ","Newburgh, NY","Newport News, VA","Nome, AK","Norfolk, VA","North Bend, OR","North Platte, NE","Oakland, CA","Ogdensburg, NY","Oklahoma City, OK","Omaha, NE","Ontario, CA","Orange County, CA","Orlando, FL","Oshkosh, WI","Owensboro, KY","Oxnard, CA","Paducah, KY","Page, AZ","Palm Springs, CA","Panama City, FL","Parkersburg, WV","Pasco, WA","Pellston, MI","Pendleton, OR","Pensacola, FL","Peoria, IL","Philadelphia, PA","Phoenix, AZ","Pierre, SD","Pinehurst, NC","Pittsburgh, PA","Pocatello, ID","Ponca City, OK","Portland, ME","Portland, OR","Portsmouth, NH","Prescott, AZ","Presque Isle, ME","Providence, RI","Provincetown, MA","Pueblo, CO","Pullman, WA","Quincy, IL","Raleigh, NC","Rapid City, SD","Redding, CA","Redmond, OR","Reno, NV","Rhinelander, WI","Richmond, VA","Riverton, WY","Roanoke, VA","Rochester, MN","Rochester, NY","Rock Springs, WY","Rockford, IL","Rockland, ME","Roswell, NM","Rutland, VT","Sacramento, CA","Saginaw, MI","Salina, KS","Salisbury, MD","Salt Lake City, UT","San Angelo, TX","San Antonio, TX","San Diego, CA","San Francisco, CA","San Francisco, CA","San Jose, CA","San Luis Obispo, CA","Sand Point, AK","Santa Barbara, CA","Santa Fe, NM","Santa Maria, CA","Santa Rosa, CA","Saranac Lake, NY","Sarasota, FL","Sault Ste. Marie, MI","Savannah, GA","Scottsbluff, NE","Seattle, WA","Shenandoah Valley Airport, VA","Sheridan, WY","Shreveport, LA","Sidney, MT","Silver City, NM","Sioux City, IA","Sioux Falls, SD","Sitka, AK","Skagway, AK","South Bend, IN","Spokane, WA","Springfield, IL","Springfield, MA","Springfield, MO","Springfield, VT","St. Cloud, MN","St. George, UT","St. Louis, MO","St. Petersburg, FL","State College, PA","Steamboat Springs, CO","Sun Valley, ID","Syracuse, NY","Tallahassee, FL","Tampa, FL","Telluride, CO","Texarkana, AR","Thief River Falls, MN","Toksook Bay, AK","Toledo, OH","Topeka, KS","Traverse City, MI","Trenton, NJ","Tri-City Airport, TN","Tucson, AZ","Tulsa, OK","Tupelo, MS","Twin Falls, ID","Tyler, TX","Unalakleet, AK","Vail, CO","Valdez, AK","Valdosta, GA","Victoria, TX","Visalia, CA","Waco, TX","Walla Walla, WA","Washington DC IAD","Washington DC DCA","Washington DC WAS","Waterloo, IA","Watertown, NY","Watertown, SD","Wausau, WI","Wenatchee, WA","West Palm Beach, FL","West Yellowstone, MT","White Plains, NY","Wichita Falls, TX","Wichita, KS","Wilkes-Barre, PA","Williamsport, PA","Williston, ND","Wilmington, DE","Wilmington, NC","Wolf Point, MT","Worland, WY","Wrangell, AK","Yakima, WA","Yakutat, AK","Yuma, AZ"]

//Get input from form for awesomplete
// const input = document.getElementById("usersDestination");
// new Awesomplete(input, {
//     list: cities
// });

//SETUP VARIABLES FOR VOLUNTEER API
//============================================================================================
//Create the query URL based on user destination.

$(document).on('click', '#volButton', function (e) {
    //this line of code prevents the submission of form data on click since the button in a form
    e.preventDefault();
    const volunteerAPIkey = "9560bbac6e597a4e08e3d82094ba5da2";
    // authentication headers for API requests
    const authenticationHeaders = {
        "X-WSSE": volunteerAPIkey,
        "Authorization": "WSSE profile='\ VolunteerHere\'"
    };
    const queryURLBase = "https://www.volunteermatch.org/api/call?action=searchOpportunities";
    console.log(queryURLBase);
    // metaData for the API Key/site
    const metaData = null;
    //Grab the input from the textbox and trim any extra spaces
    const newCity = $('#usersDestination').val().trim();

    //Object for volunteer match search
    const volSearch = {
        "location": newCity,
        "opportunityTypes": ["public", "private"],
        "fieldsToDisplay": ["title", "imageUrl", "name", "location", "endDate", "plaintextDescription", "vmUrl"],
        "numberOfResults": 10
    };
    //first empty the div with any previous search results
    //$('.trip').empty();

    //Build the queryURL with the query URL base and the search terms --the destination (and trip dates?)
    const queryURL = queryURLBase + "&key=" + volunteerAPIkey + "&query=" + JSON.stringify(volSearch);
    //GET function to retrieve information about the volunteer opportunities from the volunteer match API
    //with an AJAX call
    $.ajax({url: queryURL, method: 'GET'}).done(function(response) {
        //Make a variable that stores the JSON from the volunteer match API
        var volMatch = response.opportunities;
        console.log(volMatch);
        //For loop for the city in the volunteer opportunities array.
        for (var j = 0; j < volMatch.length; j++) {
            //Create a new div for the volunteer opportunities
            var volResults = $('<div class="trip">');
            $('#vol').append(volResults);
            // /Add the volunteer opportunities
            //Title of volunteer opportunity
            var oppTitle = $('<h3 id="volTitle">').html(volMatch[j].title);
            //Appending to volResults
            volResults.append(oppTitle);
            //End date
            if (volMatch[j].availability.endDate == null) {
                var endingDate = $('<div class="row" id="end">').text("End Date: Ongoing");
            }
            else {
                var endingDate = $('<div class="row" id="end">').text("End Date: " + volMatch[j].availability.endDate);
            }
            //Appending to the title
            volResults.append(endingDate);
            //Organization name appending to end date
            var orgName = $('<div class="row" id="org">').text(volMatch[j].parentOrg.name);
            volResults.append(orgName);
            //Adding location appending to organization name
            var loc = $('<div class="row" id="location">').text(volMatch[j].location.city + ", " + volMatch[j].location.region);
            volResults.append(loc);
            //Images URL is encoded. Decoding the url and replacing empty picture with placeholder.
            if (volMatch[j].imageUrl == null) {
                var imgURL = $('<img src="/assets/img/noImage.jpg">')
                    .addClass('volImg');
            }
            else {
                var encImgURL = volMatch[j].imageUrl;
                var decImgURL = decodeURIComponent(encImgURL);
                var imgURL = $('<img>')
                    .addClass('volImg')
                    .attr('src', decImgURL);
            }
            //Create new row for images
            var imgRow = $('<div class="row" id="orgImg">').html(imgURL);
            volResults.append(imgRow);
            //Description of volunteer opportunity
            var orgDescription = $('<div class="row" id="description">').text(volMatch[j].plaintextDescription);
            volResults.append(orgDescription);
            //Volunteer Match URL
            var encMatchURL = volMatch[j].vmUrl;
            var decMatchURL = decodeURIComponent(encMatchURL);
            var matchURL = $('<a>Click here for more information!</a>')
                .addClass('.volMatchURL')
                .attr('href', decMatchURL)
                .attr("target","_blank");
            var linkRow = $('<div class="row" id="link">').html(matchURL);
            orgDescription.append(linkRow);
            // Putting 5 volunteer opportunities in each column
            if(j < 5) {
                $('#volCol1').append(volResults);
            }
            else {
                $('#volCol2').append(volResults);
            }
        }
        //Clear the textboxes when done

    });


});



