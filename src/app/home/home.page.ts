import { Component } from '@angular/core';
import {MyCustomPlugin} from 'my-custom-plugin';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  async testPluginMethod(msg: string) {
    
    await MyCustomPlugin.testPluginMethod({msg:msg})
    .then((res:any)=>{alert("Return value is " +JSON.stringify(res.value))})
    .catch((err:any)=>{alert(JSON.stringify(err))})
  }

  async pluginPermissionMethod()
  {
    alert("pluginPermissionMethod")
    await MyCustomPlugin.pluginPermissionMethod()
    .then((res:any)=>{alert(JSON.stringify(res))})
    .catch((err:any)=>{alert(JSON.stringify(err))})
  }
  async openWebsite()
  {
    await MyCustomPlugin.openWebsite({siteURL:"https://capacitorjs.com/docs/plugins"})
    .then((res:any)=>{alert(JSON.stringify(res))})
    .catch((err:any)=>{alert(JSON.stringify(err))})
  }

  async calenderTest()
  {
    await MyCustomPlugin.calenderTest()
    .then((res:any)=>{alert(JSON.stringify(res))})
    .catch((err:any)=>{alert(JSON.stringify(err))})
  }

}
