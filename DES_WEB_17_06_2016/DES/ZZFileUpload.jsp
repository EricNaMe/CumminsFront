<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
    <head>
        <title>Add Photo</title>
    </head>
    <body>
        <h2>Add Photo</h2>
        <form id="form1" enctype="multipart/form-data" action="AttachFile" method="post">
            <table>
                <tr>
                    <td>Enter Photo Id :</td>
                    <td><input  type="text"  name="id_queja"/></td>
                </tr>
                
                <tr>
                    <td>Select Photo  </td>
                    <td><input type="file"  name="photo" />
                </tr>
            </table>
            <p/>
            <input type="submit" value="Add Photo"/>
        </form>

        <p/>
        <a href="listphotos">List Photos </a>
    </body>
</html>