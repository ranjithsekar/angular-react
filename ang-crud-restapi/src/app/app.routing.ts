import { RouterModule, Routes} from '@angular/router';
import { ShowProductComponent } from '../app/component/show-product/show-product.component';
import { AddProductComponent } from '../app/component/add-product/add-product.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

const routes: Routes = [
    {path: '', component: ShowProductComponent},
    {path: 'show-product', component: ShowProductComponent},
    {path: 'add-product', component: AddProductComponent},
    {path: 'edit-product', component: EditProductComponent}
]

export const AppRoutingModule = RouterModule.forRoot(routes);