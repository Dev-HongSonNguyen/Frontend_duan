import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/Client/home-page/home-page.component';
import { LayoutClientComponent } from './layout/layout-client/layout-client.component';
import { LayoutAdminComponent } from './layout/layout-admin/layout-admin.component';
import { DashboardComponent } from './pages/Admin/dashboard/dashboard.component';
import { ProductManagerComponent } from './pages/Admin/product-manager/product-manager.component';
import { CategoryManagerComponent } from './pages/Admin/category-manager/category-manager.component';
import { ProductUpdateComponent } from './pages/Admin/product-update/product-update.component';

const routes: Routes = [
  {
    path: "", component: LayoutClientComponent, children:[
      {
        path: "", component: HomePageComponent
      }
    ]
  },
  {
    path: "admin", component: LayoutAdminComponent, children:[
      {
        path: "", redirectTo:"dashboard", pathMatch:"full"
      },
      {
        path: "dashboard", component: DashboardComponent
      },
      {
        path: "product", component: ProductManagerComponent
      },
      {
        path: "product/edit/:id", component: ProductUpdateComponent
      },
      {
        path: "category", component: CategoryManagerComponent
      }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
