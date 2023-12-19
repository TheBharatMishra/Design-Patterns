class IOSButton(){
}

class AndroidButton(){
}



const button1 = os === 'ios'? new IOSButton(): new AndroidButton();
