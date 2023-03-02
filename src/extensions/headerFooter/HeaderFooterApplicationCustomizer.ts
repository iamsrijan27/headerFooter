import { Log } from '@microsoft/sp-core-library';
import {
  BaseApplicationCustomizer, PlaceholderContent, PlaceholderName
} from '@microsoft/sp-application-base';
import { Dialog } from '@microsoft/sp-dialog';

import * as strings from 'HeaderFooterApplicationCustomizerStrings';

const LOG_SOURCE: string = 'HeaderFooterApplicationCustomizer';
require('./header.css')
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IHeaderFooterApplicationCustomizerProperties {
  // This is an example; replace with your own property
  testMessage: string;
}

/** A Custom Action which can be run during execution of a Client Side Application */
export default class HeaderFooterApplicationCustomizer
  extends BaseApplicationCustomizer<IHeaderFooterApplicationCustomizerProperties> {

  private _topPlaceholder: any;

  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, `Initialized ${strings.Title}`);

    let message: string = this.properties.testMessage;
    if (!message) {
      message = '(No properties were provided.)';
    }

    let topPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Top); 
    if (topPlaceholder) { 
       topPlaceholder.domElement.innerHTML = 
       '<div class="header1"><div class="header2"><h1>Azure CDN</h1> </div> </div>';

    let bottomPlaceholder: PlaceholderContent = this.context.placeholderProvider.tryCreateContent(PlaceholderName.Bottom); 
    if (bottomPlaceholder) { 
      bottomPlaceholder.domElement.innerHTML = '<div class="border1"><div class="border2"> Copyright &copy; 2022 by Azure CDN . All Rights Reserved   </div> </div>';
    // Dialog.alert(`Hello from ${strings.Title}:\n\n${message}`).catch(() => {
    //   /* handle error */
    // });

    return Promise.resolve();
    }
  }
  }
}
