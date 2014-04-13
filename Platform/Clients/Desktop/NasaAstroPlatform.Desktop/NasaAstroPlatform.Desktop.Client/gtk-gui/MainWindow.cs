
// This file has been generated by the GUI designer. Do not modify.

public partial class MainWindow
{
	private global::Gtk.Notebook notebook1;
	private global::NasaAstroPlatform.Desktop.Client.SendMessageWidget sendmessagewidget1;
	private global::Gtk.Label label1;
	private global::NasaAstroPlatform.Desktop.Client.SendMessageWidget sendmessagewidget2;
	private global::Gtk.Label label2;

	protected virtual void Build ()
	{
		global::Stetic.Gui.Initialize (this);
		// Widget MainWindow
		this.Name = "MainWindow";
		this.Title = global::Mono.Unix.Catalog.GetString ("Astro Platform Client");
		this.WindowPosition = ((global::Gtk.WindowPosition)(4));
		// Container child MainWindow.Gtk.Container+ContainerChild
		this.notebook1 = new global::Gtk.Notebook ();
		this.notebook1.CanFocus = true;
		this.notebook1.Name = "notebook1";
		this.notebook1.CurrentPage = 1;
		this.notebook1.BorderWidth = ((uint)(6));
		// Container child notebook1.Gtk.Notebook+NotebookChild
		this.sendmessagewidget1 = new global::NasaAstroPlatform.Desktop.Client.SendMessageWidget ();
		this.sendmessagewidget1.Events = ((global::Gdk.EventMask)(256));
		this.sendmessagewidget1.Name = "sendmessagewidget1";
		this.notebook1.Add (this.sendmessagewidget1);
		// Notebook tab
		this.label1 = new global::Gtk.Label ();
		this.label1.Name = "label1";
		this.label1.LabelProp = global::Mono.Unix.Catalog.GetString ("Send message to Earth");
		this.notebook1.SetTabLabel (this.sendmessagewidget1, this.label1);
		this.label1.ShowAll ();
		// Container child notebook1.Gtk.Notebook+NotebookChild
		this.sendmessagewidget2 = new global::NasaAstroPlatform.Desktop.Client.SendMessageWidget ();
		this.sendmessagewidget2.Events = ((global::Gdk.EventMask)(256));
		this.sendmessagewidget2.Name = "sendmessagewidget2";
		this.notebook1.Add (this.sendmessagewidget2);
		global::Gtk.Notebook.NotebookChild w2 = ((global::Gtk.Notebook.NotebookChild)(this.notebook1 [this.sendmessagewidget2]));
		w2.Position = 1;
		// Notebook tab
		this.label2 = new global::Gtk.Label ();
		this.label2.Name = "label2";
		this.label2.LabelProp = global::Mono.Unix.Catalog.GetString ("Send message to NASA");
		this.notebook1.SetTabLabel (this.sendmessagewidget2, this.label2);
		this.label2.ShowAll ();
		this.Add (this.notebook1);
		if ((this.Child != null)) {
			this.Child.ShowAll ();
		}
		this.DefaultWidth = 598;
		this.DefaultHeight = 415;
		this.Show ();
		this.DeleteEvent += new global::Gtk.DeleteEventHandler (this.OnDeleteEvent);
	}
}
