import {Inject, ViewChild} from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import last from 'jspdf-autotable';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import {MessengerService} from '../../../MessengerService';
@Component({
  selector: 'app-participantes-por-categorias',
  templateUrl: './participantes-por-categorias.component.html',
  styleUrls: ['./participantes-por-categorias.component.scss']
})
export class ParticipantesPorCategoriasComponent implements OnInit {

  junior = [];
  sub23 = [];
  open = [];
  masterA = [];
  masterB = [];
  masterC = [];
  Elite = [];
  porTiempo: any;
  nombreCarrera;

  admin: any;
  carrera: any;
  participantes: any;

  constructor(public httpService: HttpClient, private router: Router, private messengerService: MessengerService,
              @Inject(MessengerService) public recibido: MessengerService['usuario']) {
    this.admin = recibido.usuario;
    this.messengerService.message.subscribe(value => {this.carrera = value; });
    this.nombreCarrera = this.carrera.nombreCarrera;
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/participantesCarrera',
      { idcarrera: this.carrera.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => {
        this.participantes = resp;
        this.setCategorias(this.participantes);
        this.Elite = this.participantes;
      });
    this.httpService.post('http://localhost/APIStraviaTec/Carrera/posicionesCarrera',
      { idcarrera: this.carrera.idCarrera}).subscribe(
      (resp: HttpResponse<any>) => {
        this.porTiempo = resp;
        console.log(resp);
      });
  }

  ngOnInit(): void {
  }

  setCategorias(participantes): void{
    const categorias = ['Junior', 'Sub-23', 'Open', 'Master-A', 'Master-B', 'Master-C'];
    for (let i = 0; i < categorias.length; i++){
      this.setCategoriasAux(participantes, categorias[i], i);
    }
  }
  setCategoriasAux(participantes, categoria, index): void{
    const listas = [this.junior, this.sub23, this.open, this.masterA, this.masterB, this.masterC];
    for (const participante of participantes) {
      if (participante.categoria === categoria){
        listas[index].push(participante);
      }
    }
  }
  // tslint:disable-next-line:typedef
  openPDFCategorias(): void {
    const doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(this.nombreCarrera, 50, 15);
    doc.setFontSize(30);
    doc.text('Ordenados por Categorias', 15, 28);
    doc.setFontSize(18);
    doc.text('Junior', 15, 38);
    autoTable(doc, {
      html: '#junior',
      startY: 45,
    });
    let finalY = (doc as any).lastAutoTable.finalY;
    doc.text('Sub 23', 15, finalY + 10);
    autoTable(doc, {
      html: '#sub23',
      startY: finalY + 17,
    });
    finalY = (doc as any).lastAutoTable.finalY;
    doc.text('Open', 15, finalY + 10);
    autoTable(doc, {
      html: '#open',
      startY: finalY + 17,
    });
    finalY = (doc as any).lastAutoTable.finalY;
    doc.text('Master A', 15, finalY + 10);
    autoTable(doc, {
      html: '#masterA',
      startY: finalY + 17,
    });
    finalY = (doc as any).lastAutoTable.finalY;
    doc.text('Master B', 15, finalY + 10);
    autoTable(doc, {
      html: '#masterB',
      startY: finalY + 17,
    });
    finalY = (doc as any).lastAutoTable.finalY;
    doc.text('Master C', 15, finalY + 10);
    autoTable(doc, {
      html: '#masterC',
      startY: finalY + 17,
    });
    finalY = (doc as any).lastAutoTable.finalY;
    doc.text('Élite', 15, finalY + 10);
    autoTable(doc, {
      html: '#Elite',
      startY: finalY + 17,
    });

    doc.save('Categorias ' + this.nombreCarrera + '.pdf');
  }

  // tslint:disable-next-line:typedef
  openPDFTiempos(): void {
    const doc = new jsPDF();
    doc.setFontSize(40);
    doc.text(this.nombreCarrera, 50, 15);
    doc.setFontSize(30);
    doc.text('Ordenados por Tiempo', 15, 28);
    autoTable(doc, {
      html: '#tiempos',
      startY: 35,
    });
    doc.save('Tiempos ' + this.nombreCarrera + '.pdf');
  }
}
