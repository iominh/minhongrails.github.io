---
layout: post
title: "Tutorial: PDF image extraction"
description: ""
category: tech
tags: [tutorial,java,iText,PDF,images]
---
{% include JB/setup %}

In my effort to give back to open source, I'm going to start writing tutorials
and sample code on GitHub for snippets of code that I've written or used. 
This particular tutorial will cover how to extract images from a PDF, store
them to a folder, and execute everything from the command line.

<div class="mSpotlight">Background</div>

Initially I looked at [Apache PDFBox](http://pdfbox.apache.org/), which looked great because
of its Apache license. Unfortunately, it didn't meet my rule of "must work in
under 15 minutes." Next I looked at [iTextPDF](http://itextpdf.com/), which
unfortunately has an [AGPL license](http://itextpdf.com/terms-of-use/agpl.php) 
but nonetheless had better documentation and I was able to get it working
very fast.

A quick Google search for "iText extract images" gave several results such as 
[a Stackoverflow post](http://stackoverflow.com/questions/7007917/how-to-extract-images-from-a-pdf-with-itext-in-the-correct-order) and the excellent [iText ExtractImages tutorial](http://itextpdf.com/examples/iia.php?id=284).

I initially tried the Stackoverflow example because its code was concise but
found an issue where it would sometimes output files in the wrong format (not
every image is a jpeg) or not extract certain images correctly. Therefore I tried
the official ExtractImages tutorial and that mostly worked.

However, there was a few modifications I needed to add:

* Added capability to easily run the program from the command line
* Added Maven so that everything can be quickly set up to be run into
an IDE with all dependencies downloaded.
* I noticed that some images came out with inverted colors, so I may come back
to fix that later.

<div class="mSpotlight">Quickstart</div>

I created a [sample Github project](https://github.com/minhongrails/iTextTutorials),
which can be executed with the following steps assuming you have Maven and git installed:

<div><pre class="prettyprint"><code class="bash">git clone https://github.com/minhongrails/iTextTutorials
cd iTextTutorials
mvn install exec:exec
</code></pre></div>

The program will use the default settings and extract 4 images from the included
NASA PDF to the "target" directory.

Parameters can also be passed in through "src" and "dest":

<div><pre class="prettyprint"><code class="bash">mvn exec:exec -Dsrc=/dir1/file.pdf -Ddest=/dir1/output
</code></pre></div>

Additionally, if you use NetBeans or Eclipse, it's very simple to get the project
files set up with all of the dependencies so that you're ready to start coding:

<div><pre class="prettyprint"><code class="bash">mvn eclipse:eclipse
</code></pre></div>

<div class="mSpotlight">Code</div>

Everything is available on GitHub but this section will show
the code if you don't like GitHub or Maven for some reason:

First, add the dependency to your Maven pom:

<div><pre class="prettyprint"><code class="no-highlight">&lt;dependency&gt;
            &lt;groupId&gt;com.itextpdf&lt;/groupId&gt;
            &lt;artifactId&gt;itextpdf&lt;/artifactId&gt;
            &lt;version&gt;5.1.3&lt;/version&gt;
            &lt;type&gt;jar&lt;/type&gt;
&lt;/dependency&gt;
</code></pre></div>

Next, create an ImageRenderListener.java file:

<div><pre class="prettyprint"><code class="java">package io.minh.iText.image;

import java.io.FileOutputStream;
import java.io.IOException;

import com.itextpdf.text.pdf.parser.ImageRenderInfo;
import com.itextpdf.text.pdf.parser.PdfImageObject;
import com.itextpdf.text.pdf.parser.RenderListener;
import com.itextpdf.text.pdf.parser.TextRenderInfo;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Saves images to a directory.
 *
 * @author mnguyen
 */
public class ImageRenderListener implements RenderListener {

    /**
     * The directory path to store images.
     */
    protected String path;

    /**
     * Creates a RenderListener that will look for images.
     */
    public ImageRenderListener(String path) {
        this.path = path;
    }

    /**
     * @see com.itextpdf.text.pdf.parser.RenderListener#beginTextBlock()
     */
    @Override
    public void beginTextBlock() {
    }

    /**
     * @see com.itextpdf.text.pdf.parser.RenderListener#endTextBlock()
     */
    @Override
    public void endTextBlock() {
    }

    /**
     * @see com.itextpdf.text.pdf.parser.RenderListener#renderImage(
     * com.itextpdf.text.pdf.parser.ImageRenderInfo)
     */
    @Override
    public void renderImage(ImageRenderInfo renderInfo) {
        try {
            String filename;
            FileOutputStream os;
            PdfImageObject image = renderInfo.getImage();
            if (image == null) {
                return;
            }
            filename = String.format(path, renderInfo.getRef().getNumber(), image.getFileType());
            System.out.println("Writing image to file: " + filename);
            os = new FileOutputStream(filename);
            os.write(image.getImageAsBytes());
            os.flush();
            os.close();
        } catch (IOException e) {
            Logger.getLogger(ImageRenderListener.class.getName()).log(Level.SEVERE, null, e);
        }
    }

    /**
     * @see com.itextpdf.text.pdf.parser.RenderListener#renderText(
     * com.itextpdf.text.pdf.parser.TextRenderInfo)
     */
    @Override
    public void renderText(TextRenderInfo renderInfo) {
    }
}
</code></pre></div>


Next, create an ExtractImages.java file:

<div><pre class="prettyprint"><code class="java">package io.minh.iText.image;

import java.io.IOException;
import com.itextpdf.text.DocumentException;
import com.itextpdf.text.pdf.PdfReader;
import com.itextpdf.text.pdf.parser.PdfReaderContentParser;

/**
 * Extracts images from a PDF file.
 */
public class ExtractImages {

    /**
     * PDF to extract images from
     */
    public static final String SOURCE_PDF = "src/main/resources/354470main_aresIX_fs_may09.pdf";

    /**
     * Parses a PDF and extracts all the images.
     *
     * @param filename the source PDF
     * @param destination the directory to save images
     */
    public void extractImages(String filename, String destination)
            throws IOException, DocumentException {
        System.out.println("Processing PDF at " + filename);
        System.out.println("Saving images to " + destination);

        PdfReader reader = new PdfReader(filename);
        PdfReaderContentParser parser = new PdfReaderContentParser(reader);
        ImageRenderListener listener = new ImageRenderListener(destination + "/Img%s.%s");
        for (int i = 1; i &lt;= reader.getNumberOfPages(); i++) {
            parser.processContent(i, listener);
        }
        reader.close();
    }

    /**
     * Main method.
     *
     * @param args no arguments needed
     * @throws DocumentException
     * @throws IOException
     */
    public static void main(String[] args) throws IOException, DocumentException {
        String sourcePDF = SOURCE_PDF;
        String destination = "target";
        if (args.length &gt; 0) {
            sourcePDF = args[0];
            if (args.length &gt; 1) {
                destination = args[1];
            }
        }

        new ExtractImages().extractImages(sourcePDF, destination);
    }
}
</code></pre></div>
