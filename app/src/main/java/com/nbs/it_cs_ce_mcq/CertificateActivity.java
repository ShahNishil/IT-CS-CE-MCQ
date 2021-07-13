package com.nbs.it_cs_ce_mcq;

import androidx.annotation.RequiresApi;
        import androidx.appcompat.app.AppCompatActivity;

        import android.graphics.Bitmap;
        import android.graphics.drawable.BitmapDrawable;
        import android.graphics.drawable.Drawable;
        import android.os.Build;
        import android.os.Bundle;
        import android.os.Environment;
        import android.view.View;
        import android.widget.Button;
        import android.widget.EditText;
        import android.widget.Toast;

        import com.itextpdf.io.image.ImageDataFactory;
        import com.itextpdf.kernel.geom.PageSize;
        import com.itextpdf.kernel.pdf.PdfDocument;
        import com.itextpdf.kernel.pdf.PdfWriter;
        import com.itextpdf.kernel.pdf.canvas.PdfCanvas;
        import com.itextpdf.layout.Document;
        import com.itextpdf.layout.borders.Border;
        import com.itextpdf.layout.element.Paragraph;

        import java.io.File;

        import com.itextpdf.barcodes.BarcodeQRCode;
        import com.itextpdf.io.image.ImageData;
        import com.itextpdf.io.image.ImageDataFactory;
        import com.itextpdf.kernel.colors.ColorConstants;
        import com.itextpdf.kernel.colors.DeviceRgb;
        import com.itextpdf.kernel.font.PdfFont;
        import com.itextpdf.kernel.font.PdfFontFactory;
        import com.itextpdf.kernel.geom.PageSize;
        import com.itextpdf.kernel.pdf.PdfDocument;
        import com.itextpdf.kernel.pdf.PdfDocumentInfo;
        import com.itextpdf.kernel.pdf.PdfWriter;
        import com.itextpdf.kernel.pdf.canvas.draw.DottedLine;
        import com.itextpdf.kernel.pdf.xobject.PdfFormXObject;
        import com.itextpdf.layout.Document;
        import com.itextpdf.layout.element.Cell;
        import com.itextpdf.layout.element.Image;
        import com.itextpdf.layout.element.LineSeparator;
        import com.itextpdf.layout.element.Paragraph;
        import com.itextpdf.layout.element.Table;
        import com.itextpdf.layout.element.Text;
        import com.itextpdf.layout.property.BackgroundImage;
        import com.itextpdf.layout.property.HorizontalAlignment;
        import com.itextpdf.layout.property.TextAlignment;

        import java.io.ByteArrayOutputStream;
        import java.io.File;
        import java.io.FileNotFoundException;
        import java.io.FileOutputStream;
        import java.io.IOException;
        import java.io.OutputStream;
        import java.time.LocalDate;
        import java.time.LocalTime;
        import java.time.format.DateTimeFormatter;

    public class CertificateActivity extends AppCompatActivity{


    EditText editTextName, editTextSub, editTextId ;
    Button submitButton;

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.certificate);

        editTextName=findViewById(R.id.editTextName);
        editTextSub=findViewById(R.id.editTextSub);
        editTextId=findViewById(R.id.editTextId);
        submitButton=findViewById(R.id.button);

        submitButton.setOnClickListener(new View.OnClickListener() {
        @Override
        public void onClick(View view)
        {

        String name = editTextName.getText().toString();
        String subject = editTextSub.getText().toString();
        String id = editTextId.getText().toString();

        try {
        createPdf(name, subject, id);
        } catch (FileNotFoundException e) {
        e.printStackTrace();
        }

        }
        });
       /**
        try {
            createPdf();
        } catch (FileNotFoundException e) {
            e.printStackTrace();
        }**/
    }
    /**
     private void createPdf(String name, String age, String number, String location) throws FileNotFoundException{

     String pdfPath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).toString();
     File file = new File(pdfPath, "myPDF.pdf");
     OutputStream outputStream = new FileOutputStream(file);
     PdfWriter writer = new PdfWriter(file);
     PdfDocument pdfDocument = new PdfDocument(writer);
     Document document = new Document(pdfDocument);


     pdfDocument.setDefaultPageSize(PageSize.A6);
     document.setMargins(0,0,0,0);

     Drawable d=getDrawable(R.drawable.touristimg);
     Bitmap bitmap=((BitmapDrawable)d).getBitmap();
     ByteArrayOutputStream stream= new ByteArrayOutputStream();
     bitmap.compress(Bitmap.CompressFormat.PNG, 100,stream);
     byte[] bitmapData=stream.toByteArray();

     ImageData imageData= ImageDataFactory.create(bitmapData);
     Image image= new Image(imageData);

     Paragraph visitorTicket= new Paragraph("Visitor Ticket").setBold().setFontSize(24).setTextAlignment(TextAlignment.CENTER);
     Paragraph goup= new Paragraph("Tourism Department\n" + "Government Of Uttar Pradesh, India").setTextAlignment(TextAlignment.CENTER).setFontSize(12);
     Paragraph varansi=new Paragraph("Varanasi").setBold().setFontSize(20).setTextAlignment(TextAlignment.CENTER);

     float[] width={100f, 100f};
     Table table=new Table(width);
     table.setHorizontalAlignment(HorizontalAlignment.CENTER);
     table.addCell(new Cell().add(new Paragraph("Visitor Name")));
     table.addCell(new Cell().add(new Paragraph(name)));

     table.addCell(new Cell().add(new Paragraph("Age")));
     table.addCell(new Cell().add(new Paragraph(age)));

     table.addCell(new Cell().add(new Paragraph("Mobile Number")));
     table.addCell(new Cell().add(new Paragraph(number)));

     table.addCell(new Cell().add(new Paragraph("Location")));
     table.addCell(new Cell().add(new Paragraph(location)));

     DateTimeFormatter dateFormatter=DateTimeFormatter.ofPattern("dd/MM/yyyy");

     table.addCell(new Cell().add(new Paragraph("Date")));
     table.addCell(new Cell().add(new Paragraph(LocalDate.now().format(dateFormatter).toString())));

     DateTimeFormatter timeFormatter=DateTimeFormatter.ofPattern("HH:mm:ss a");

     table.addCell(new Cell().add(new Paragraph("Time")));
     table.addCell(new Cell().add(new Paragraph(LocalTime.now().format(timeFormatter).toString())));

     BarcodeQRCode qrCode=new BarcodeQRCode(name+"\n"+age+"\n"+number+"\n"+location+"\n"+LocalDate.now().format(dateFormatter)+"\n"+LocalTime.now().format(timeFormatter));
     PdfFormXObject qrCodeObject=qrCode.createFormXObject(ColorConstants.BLACK, pdfDocument);
     Image qrCodeImage=new Image(qrCodeObject).setWidth(80).setHorizontalAlignment(HorizontalAlignment.CENTER);

     document.add(image);
     document.add(visitorTicket);
     document.add(goup);
     document.add(varansi);
     document.add(table);
     document.add(qrCodeImage);

     document.close();
     Toast.makeText(this, "Pdf Created", Toast.LENGTH_SHORT).show();


     }
     }

     **/

    private void createPdf(String name, String subject, String id) throws FileNotFoundException {

        String pdfPath = Environment.getExternalStoragePublicDirectory(Environment.DIRECTORY_DOWNLOADS).toString();
        File file = new File(pdfPath, "Certificate.pdf");
        OutputStream outputStream = new FileOutputStream(file);
        PdfWriter writer = new PdfWriter(file);
        PdfDocument pdfDocument = new PdfDocument(writer);
        PageSize pageSize = PageSize.A5.rotate();
        Document document = new Document(pdfDocument,pageSize);
        document.setMargins(0,0,0,0);


        Drawable d1= getDrawable(R.drawable.background);
        Bitmap bitmap1=((BitmapDrawable)d1).getBitmap();
        ByteArrayOutputStream stream1 = new ByteArrayOutputStream();
        bitmap1.compress(Bitmap.CompressFormat.JPEG, 100, stream1);
        byte[] bitmapData1=stream1.toByteArray();

        ImageData imageData1=ImageDataFactory.create(bitmapData1);
        Image image1=new Image(imageData1);


        float[] width1={920f};
        Table table1=new Table(width1);
        table1.setMargins(-260,25,0,215);
        table1.addCell(new Cell().add(new Paragraph(name).setFontSize(24).setFontColor(ColorConstants.DARK_GRAY)).setBorder(Border.NO_BORDER));

        float[] width2={920f};
        Table table2=new Table(width2);
        table2.setMargins(16,25,0,485);
        table2.addCell(new Cell().add(new Paragraph(subject).setFontSize(14).setFontColor(ColorConstants.BLACK)).setBorder(Border.NO_BORDER));

        float[] width3={920f};
        Table table3=new Table(width3);
        table3.setMargins(150,0,0,10);
        table3.addCell(new Cell().add(new Paragraph(id).setFontSize(10).setFontColor(ColorConstants.BLACK)).setBorder(Border.NO_BORDER));
/**
 float[] width4={920f};
 Table table4=new Table(width4);
 DateTimeFormatter dateFormatter1=DateTimeFormatter.ofPattern("dd/MM/yyyy");
 table4.addCell(new Cell().add(new Paragraph("Date").setFontSize(14).setFontColor(ColorConstants.BLACK)).setBorder(Border.NO_BORDER));
 table4.addCell(new Cell().add(new Paragraph(LocalDate.now().format(dateFormatter1).toString())));

 float[] width5={920f};
 Table table5=new Table(width5);
 DateTimeFormatter dateFormatter2=DateTimeFormatter.ofPattern("dd/MM/yyyy");
 table5.addCell(new Cell().add(new Paragraph("Date")));
 table5.addCell(new Cell().add(new Paragraph(LocalDate.now().format(dateFormatter2).toString())));
 **/


        document.add(image1);
        document.add(table1);
        document.add(table2);
        document.add(table3);
        //   document.add(table4);
        // document.add(table5);


        // PdfCanvas canvas = new PdfCanvas(pdfDocument.addNewPage());
        // canvas.addImageFittedIntoRectangle(ImageDataFactory.create(bitmapData1), pageSize, false);

//     document.add(new Paragraph("Berlin!"));

        document.close();
        Toast.makeText(this, "Pdf Created", Toast.LENGTH_SHORT).show();

    }

    }
