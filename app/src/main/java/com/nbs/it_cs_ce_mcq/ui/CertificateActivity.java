package com.nbs.it_cs_ce_mcq.ui;

import android.content.ActivityNotFoundException;
import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import android.widget.Toast;

import androidx.annotation.RequiresApi;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import com.itextpdf.io.image.ImageData;
import com.itextpdf.io.image.ImageDataFactory;
import com.itextpdf.kernel.colors.Color;
import com.itextpdf.kernel.colors.ColorConstants;
import com.itextpdf.kernel.colors.DeviceRgb;
import com.itextpdf.kernel.font.PdfFont;
import com.itextpdf.kernel.font.PdfFontFactory;
import com.itextpdf.kernel.geom.PageSize;
import com.itextpdf.kernel.pdf.PdfDocument;
import com.itextpdf.kernel.pdf.PdfDocumentInfo;
import com.itextpdf.kernel.pdf.PdfWriter;
import com.itextpdf.kernel.pdf.canvas.draw.DottedLine;
import com.itextpdf.layout.Document;
import com.itextpdf.layout.borders.Border;
import com.itextpdf.layout.element.Cell;
import com.itextpdf.layout.element.Image;
import com.itextpdf.layout.element.LineSeparator;
import com.itextpdf.layout.element.Paragraph;
import com.itextpdf.layout.element.Table;
import com.itextpdf.layout.element.Text;
import com.itextpdf.layout.property.TextAlignment;
import com.nbs.it_cs_ce_mcq.FileUtils;
import com.nbs.it_cs_ce_mcq.R;
import com.nbs.it_cs_ce_mcq.permission.PermissionsActivity;
import com.nbs.it_cs_ce_mcq.permission.PermissionsChecker;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Objects;

import static com.nbs.it_cs_ce_mcq.LogUtils.LOGE;
import static com.nbs.it_cs_ce_mcq.permission.PermissionsActivity.PERMISSION_REQUEST_CODE;
import static com.nbs.it_cs_ce_mcq.permission.PermissionsChecker.REQUIRED_PERMISSION;
import java.util.Random;

public class CertificateActivity extends AppCompatActivity {

    Context mContext;

    PermissionsChecker checker;

    String dest;


    EditText editTextName, editTextId ;
    TextView editTextSub;
    Toolbar toolbar;
    private String subStr, idStr, nameStr;
    public static int COUNT=0;
    String testname2;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.certificate);

        mContext = getApplicationContext();


        toolbar=findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);
        Objects.requireNonNull(getSupportActionBar()).setDisplayShowTitleEnabled(true);

        getSupportActionBar().setTitle("Certificate Details");
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);


        editTextName=findViewById(R.id.editTextName);
        editTextSub=findViewById(R.id.editTextSub);
        editTextId=findViewById(R.id.editTextId);

        testname2=getIntent().getStringExtra("TEST_NAME1");
        editTextSub.setText(testname2);

        checker = new PermissionsChecker(this);

        dest = FileUtils.getAppPath(mContext) + "Certificate.pdf";

    }

    public void createPdf(String dest, String Name, String Subject, String Id) {

        if (new File(dest).exists()) {
            new File(dest).delete();
        }

        try {
            /**
             * Creating Document
             */
            PdfWriter pdfWriter = new PdfWriter(new FileOutputStream(dest));
            PdfDocument pdfDocument = new PdfDocument(pdfWriter);

            PageSize pageSize = PageSize.A5.rotate();
            Document document = new Document(pdfDocument,pageSize,true);
            document.setMargins(0,0,0,0);

        //    PdfFont font = PdfFontFactory.createFont("assets/fonts/brandon_medium.otf", "UTF-8", true);

            Drawable d1= getDrawable(R.drawable.background);
            Bitmap bitmap1=((BitmapDrawable)d1).getBitmap();
            ByteArrayOutputStream stream1 = new ByteArrayOutputStream();
            bitmap1.compress(Bitmap.CompressFormat.JPEG, 100, stream1);
            byte[] bitmapData1=stream1.toByteArray();

            ImageData imageData1= ImageDataFactory.create(bitmapData1);
            Image image1=new Image(imageData1);

            float[] widthtitle={920f};
            Table title=new Table(widthtitle);
            title.setMaxWidth(920f);
            title.setMargins(-360,0,0,50);
            title.addCell(new Cell().add(new Paragraph("NBS Technologies").setFontSize(18).setFontColor(ColorConstants.BLACK).setTextAlignment(TextAlignment.CENTER)).setBorder(Border.NO_BORDER).setBold());


            float[] widthcerti={920f};
            Table certi=new Table(widthcerti);
            certi.setMaxWidth(920f);
            certi.setMargins(10,0,0,50);
            certi.addCell(new Cell().add(new Paragraph("CERTIFICATE OF APPRECIATION").setFontSize(24).setFontColor(ColorConstants.BLUE).setTextAlignment(TextAlignment.CENTER)).setBorder(Border.NO_BORDER).setBold());


            float[] widthcertify={920f};
            Table certify=new Table(widthcertify);
            certify.setMaxWidth(920f);
            certify.setMarginTop(10);
            certify.setMarginLeft(50);
            certify.addCell(new Cell().add(new Paragraph("This is to certify that").setFontSize(14).setFontColor(ColorConstants.DARK_GRAY).setTextAlignment(TextAlignment.CENTER)).setBorder(Border.NO_BORDER));

            float[] width1={920f};
            Table table1=new Table(width1);
            table1.setMargins(9,0,0,50);
            table1.addCell(new Cell().add(new Paragraph(Name).setFontSize(24).setFontColor(ColorConstants.BLUE).setTextAlignment(TextAlignment.CENTER)).setBorder(Border.NO_BORDER).setBold());

            float[] width2={920f};
            Table table2=new Table(width2);
            table2.setMaxWidth(920f);
            table2.setMarginTop(10);
            table2.setMarginLeft(50);
            DateTimeFormatter dateFormatter1=DateTimeFormatter.ofPattern("dd/MM/yyyy");
            table2.addCell(new Cell().add(new Paragraph("has successfully completed E-Quiz on "+Subject+"\n" +
                    "taken on "+LocalDate.now().format(dateFormatter1).toString()+"\n" +
                    "by NBS Technologies with 100%.\n").setFontSize(14).setFontColor(ColorConstants.BLACK).setTextAlignment(TextAlignment.CENTER)).setBorder(Border.NO_BORDER));

            float[] width3={920f};
            Table table3=new Table(width3);
            table3.setMargins(160,0,-110,10);
            table3.addCell(new Cell().add(new Paragraph(Id).setFontSize(10).setFontColor(ColorConstants.BLACK)).setBorder(Border.NO_BORDER));


            float[] width5={70f};
            Table table5=new Table(width5);
            DateTimeFormatter dateFormatter2=DateTimeFormatter.ofPattern("dd/MM/yyyy");
            table5.setMargins(18,0,-110,180);
            table5.addCell(new Cell().add(new Paragraph(LocalDate.now().format(dateFormatter2).toString()).setFontSize(14).setFontColor(ColorConstants.BLACK)).setBorder(Border.NO_BORDER).setUnderline());


            document.add(image1);
            document.add(title);
            document.add(certi);
            document.add(certify);
            document.add(table1);
            document.add(table2);
            document.add(table5);
            document.add(table3);


            document.close();

            Toast.makeText(mContext, "Certificate Generated...", Toast.LENGTH_SHORT).show();


        } catch (IOException e) {
            LOGE("createPdf: Error " + e.getLocalizedMessage());
        } catch (ActivityNotFoundException ae) {
            Toast.makeText(mContext, "No application found to open this file.", Toast.LENGTH_SHORT).show();
        }
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (resultCode == PermissionsActivity.PERMISSIONS_GRANTED) {
            Toast.makeText(mContext, "Permission Granted to Save", Toast.LENGTH_SHORT).show();
        } else {
            Toast.makeText(mContext, "Permission not granted, Try again!", Toast.LENGTH_SHORT).show();
        }

    }
/**
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        getMenuInflater().inflate(R.menu.menu, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        int id = item.getItemId();

        if (id == R.id.action_settings) {
            return true;
        }

        return super.onOptionsItemSelected(item);
    }
**/
    public void createPDF(View view) {
        if (checker.lacksPermissions(REQUIRED_PERMISSION)) {
            PermissionsActivity.startActivityForResult(CertificateActivity.this, PERMISSION_REQUEST_CODE, REQUIRED_PERMISSION);
        } else {

            String name=editTextName.getText().toString();
            String subject = testname2;
            String id = editTextId.getText().toString();

            nameStr=editTextName.getText().toString().trim();
            idStr=editTextId.getText().toString().trim();

            if (nameStr.isEmpty())
            {
                editTextName.setError("Enter Your Name");
                return;
            }

            if (idStr.isEmpty())
            {
                editTextId.setError("id");
                return;
            }

            createPdf(dest,name,subject,id);

        }
    }

    public void openPDF(View view)
    {
        new Handler().postDelayed(new Runnable() {
            @Override
            public void run() {
                try {
                    FileUtils.openFile(mContext, new File(dest));
                } catch (Exception e) {
                    Log.d("TAG", "run: ERror");
                }
            }
        }, 1000);
    }
}
