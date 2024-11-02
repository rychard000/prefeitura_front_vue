export default class ModalEventsDOM{
  static overflowHiddebInAllPage(){
    document.getElementById('scrollview').style.overflowX = 'hidden'
    document.getElementById('scrollview').style.height = '100px'
  }

   static overflowAutoInAllPage(){
    document.getElementById('scrollview').style.overflowX = 'auto'
  }
}
