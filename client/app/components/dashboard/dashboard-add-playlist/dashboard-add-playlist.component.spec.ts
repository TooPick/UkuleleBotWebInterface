import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAddPlaylistComponent } from './dashboard-add-playlist.component';

describe('DashboardAddPlaylistComponent', () => {
  let component: DashboardAddPlaylistComponent;
  let fixture: ComponentFixture<DashboardAddPlaylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardAddPlaylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAddPlaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
