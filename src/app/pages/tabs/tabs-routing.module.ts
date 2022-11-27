import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/tabs/avatar',
    pathMatch: 'full',
  },
  {
     path: '',
    component: TabsPage,
    children: [
      
      {
        path: 'avatar', 
        loadChildren: () => import('../avatar/avatar.module').then( m => m.AvatarPageModule )
      },
      {
        path: 'lists',
        loadChildren: () => import('../lists/lists.module').then( m => m.ListsPageModule )
      },
      {
        path: 'segment', 
        loadChildren: () => import('../segment/segment.module').then( m => m.SegmentPageModule )
      },
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
