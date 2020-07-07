import { DialogBoxComponent } from 'src/app/components/dialog-box/dialog-box.component';
import { DialogInfoComponent } from '../dialog-info/dialog-info.component';
import { IEdit } from './IEdit';

class DialogFactory {
     makeDialog(type:'small'| 'large') : IEdit {
         if (type === 'small') {
             return new DialogBoxComponent();
         } else {
             return new DialogInfoComponent();
         }


     }
}