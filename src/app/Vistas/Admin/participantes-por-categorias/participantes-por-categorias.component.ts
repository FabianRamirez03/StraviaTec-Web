import { ViewChild } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import last from 'jspdf-autotable';
@Component({
  selector: 'app-participantes-por-categorias',
  templateUrl: './participantes-por-categorias.component.html',
  styleUrls: ['./participantes-por-categorias.component.scss']
})
export class ParticipantesPorCategoriasComponent implements OnInit {

  junior = [
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
  ];
  sub23 = [];
  open = [
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
  ];
  masterA = [];
  masterB = [];
  masterC = [];
  Elite = [
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
  ];
  porTiempo = [
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },
    {
      tiempo: '02:25:22',
      nombre: 'Fabian Ramirez Arrieta',
      edad: '20',
    },














  ];
  nombreCarrera = 'Carrera Lindora';



  constructor() {
  }

  ngOnInit(): void {
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
