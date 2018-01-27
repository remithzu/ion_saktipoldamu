import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController } from 'ionic-angular';
import { CallNumber } from '@ionic-native/call-number';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/**
 * Generated class for the BhabinkamtibnasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bhabinkamtibnas',
  templateUrl: 'bhabinkamtibnas.html'
})

@Injectable()
export class BhabinkamtibnasPage {
  showList: boolean = false;
  isEmpty: boolean = false;
  searchTerm: string = '';
  tabBarElement: any;
  posts: any;
  searching: boolean = false;
  showPolres: boolean = false;
  showPolsek: boolean = false;
  showKecamatan: boolean = false;
  showDesa: boolean = false;

  field_polres: any;
  field_polsek: any;
  field_kecamatan: any;
  field_desa: any;

  polres: any;
  polsek: any;
  kecamatan: any;
  desa: any;

  id_polres: any;
  id_polsek: any;
  id_kecamatan: any;
  id_desa: any;

  constructor(
  	public navCtrl: NavController,
    private http: Http,
    private callNumber: CallNumber,
    public navParams: NavParams,
    public alert: AlertController,
    public toasCtrl: ToastController) {
    this.showList = false;
    this.searching = true;
    this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    
  	let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin';
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.posts = data;
        this.searching = false;
        this.showPolres = true;
        this.isEmpty = false;
        this.getPolres();
      },
      error => {
        this.showList = false;
        this.searching = false;
        this.isEmpty = true;
        const alerty = this.alert.create({
          title: `Internal Server!`,
          subTitle: `Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.`,
          buttons: ['Ok']
        });
        alerty.present();
      }
    );
  }

  ionViewWillEnter() {
    this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    this.tabBarElement.style.display = 'flex';
  }

  takeMeBack() {
    this.navCtrl.parent.select(0);
  }

  onSearchInput(){
    this.searching = true;
  }

  getPolres() {
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/polres';
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.polres = data;
        this.searching = false;
      },
      error => {
        this.showList = false;
        this.searching = false;
        console.log(error);
      }
    );
  }

  getPolsek(polres) {
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/polsek/'+polres;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.polsek = data;
        this.searching = false;

      },
      error => {
        this.showList = false;
        this.searching = false;
        console.log(error);
      }
    );
  }

  getKecamatan(polsek) {
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/kecamatan/'+polsek;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.kecamatan = data;
        this.searching = false;
      },
      error => {
        this.showList = false;
        this.searching = false;
        console.log(error);
      }
    );
  }

  getDesa(kecamatan) {
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/desa/'+kecamatan;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.showList = true;
        this.desa = data;
        this.searching = false;
      },
      error => {
        this.showList = false;
        this.searching = false;
        console.log(error);
      }
    );
  }

  listPolres(polres) {
    this.posts = null;
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin_polres/'+polres;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.posts = data;
        this.searching = false;
        this.showList = true;
        this.isEmpty = false;
      },
      error => {
        this.isEmpty = true;
        this.searching = false;
        this.showList = false;
        console.log(error);
      }
    );
  }

  listPolsek(polres,polsek) {
    this.posts = null;
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin_polsek/'+polres+'/'+polsek;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.posts = data;
        this.searching = false;
        this.showList = true;
        this.isEmpty = false;
      },
      error => {
        this.isEmpty = true;
        this.searching = false;
        this.showList = false;
        console.log(error);
      }
    );
  }

  listKecamatan(polres,polsek,kecamatan) {
    this.posts = null;
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin_kecamatan/'+polres+'/'+polsek+'/'+kecamatan;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.posts = data;
        this.searching = false;
        this.showList = true;
        this.isEmpty = false;
      },
      error => {
        this.isEmpty = true;
        this.searching = false;
        this.showList = false;
        console.log(error);
      }
    );
  }

  listDesa(polres,polsek,kecamatan,desa) {
    this.posts = null;
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin_desa/'+polres+'/'+polsek+'/'+kecamatan+'/'+desa;
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        console.log(data);
        this.posts = data;
        this.searching = false;
        this.showList = true;
        this.isEmpty = false;
      },
      error => {
        this.isEmpty = true;
        this.searching = false;
        this.showList = false;
        console.log(error);
      }
    );
  }


  onChangePolres(value) {
    this.id_polres = value;
    this.searching = true;
    this.showList = false;
    this.showPolres = true;
    this.showPolsek = true;
    this.getPolsek(value);
    this.listPolres(value);
  }

  onChangePolsek(value) {
    let id_polres = this.id_polres;
    console.log(id_polres);
    this.id_polsek = value;
    this.searching = true;
    this.showList = false;
    this.showPolres = true;
    this.showPolsek = true;
    this.showKecamatan = true;
    this.getKecamatan(value);
    this.listPolsek(id_polres,value);
  }

  onChangeKecamatan(value) {
    let id_polres = this.id_polres;
    let id_polsek = this.id_polsek;
    this.id_kecamatan = value;
    this.showPolres = true;
    this.showPolsek = true;
    this.showKecamatan = true;
    this.showDesa = true;
    this.getDesa(value);
    this.listKecamatan(id_polres,id_polsek,value);
  }

  onChangeDesa(value) {
    let id_polres = this.id_polres;
    let id_polsek = this.id_polsek;
    let id_kecamatan = this.id_kecamatan;
    this.id_desa = value;
    this.showPolres = true;
    this.showPolsek = true;
    this.showKecamatan = true;
    this.showDesa = true;
    console.log(value);
    this.listDesa(id_polres,id_polsek,id_kecamatan,value);
  }


  loadData() {
    this.searching = true;
    let link = 'http://malut.polri.go.id/sakti-poldamu/rest/bhabin';
    this.http.get(link).map(res => res.json()).subscribe(
      data => {
        this.searching = false;
        this.showList = true;
        this.posts = data;
      },
      error => {
        this.showList = false;
        this.searching = false;
        const alerty = this.alert.create({
          title: `Internal Server!`,
          subTitle: `Tidak dapat menghubungkan ke server. Layanan tidak dapat di lanjutkan.`,
          buttons: ['Ok']
        });
        alerty.present();
      }
    );
  }

  call(n: string){
    this.callNumber.callNumber(n, true)
    .then(() => {
      this.toasCtrl.create({
        message: 'Calling '+n,
        duration: 3000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    })
    .catch((err) => {
      this.toasCtrl.create({
        message: 'Canceled',
        duration: 3000,
        position: 'top',
        showCloseButton: true,
        closeButtonText: 'x',
        dismissOnPageChange: true
      }).present();
    });
  }

  filterItems(searchTerm){
    if (searchTerm != '') {
      if (this.posts) {
        this.searching = false;
        return this.posts.filter((item) => {
          let nama = item.nama.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let nrp = item.nrp.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let telp = item.telp.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let pangkat = item.pangkat.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let kep = item.kep.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let sprin = item.sprin.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let desa = item.desa.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let kecamatan = item.kecamatan.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let desakec = item.desakec.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let polres = item.polres.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let polsek = item.polsek.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let npolres = item.npolres.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
          let npolsek = item.npolsek.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;

          if (nama) { this.searching = false; return nama; }
          else if (nrp) { this.searching = false; return nrp; }
          else if (telp) { this.searching = false; return telp; }
          else if (pangkat) { this.searching = false; return pangkat; }
          else if (kep) { this.searching = false; return kep; }
          else if (sprin) { this.searching = false; return sprin; }
          else if (desa) { this.searching = false; return desa; }
          else if (kecamatan) { this.searching = false; return kecamatan; }
          else if (desakec) { this.searching = false; return desakec; }
          else if (polres) { this.searching = false; return polres; }
          else if (polsek) { this.searching = false; return polsek; }
          else if (npolres) { this.searching = false; return npolres; }
          else if (npolsek) { this.searching = false; return npolsek; }
        });
      }
    }
    else {
      this.loadData();
    }
  }

  getItems() {
    this.searching = true;
    this.posts = this.filterItems(this.searchTerm);
  }
}
