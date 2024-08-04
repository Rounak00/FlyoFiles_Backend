<h3>Welcome to FlyoFiles Backend</h3>
<p>FlyoFiles is a simple MERN webapp using REST API and MVC file structure. This is use to share any kind of file.</p>

<h5>Concept : -</h5>
<ul>
  <li>There is only two routes :<br/>
        <ol>
           <li> http://loaclhost:5000/upload : for upload the file </li>
           <li> http://loaclhost:5000/file/:fileId : for download the file</li>
        </ol>
  </li>
  <li>
     Multer : I use multer for save all files in loacl machine temorarily.
  </li>
  <li>
     MongoDB : Here we simple record all the file's name, local machine store path, file Id [default], count of download that file.
  </li>
  <li>
     node-cron : We dont have unlimited storage in our loacl machine we do a automate task that is clear all files and collection of those files from Database, once everyday at 02:30pm.
  </li>
</ul>

<p>Visit the FrontEnd part : https://github.com/Rounak00/FlyoFiles_Frontend</p>
