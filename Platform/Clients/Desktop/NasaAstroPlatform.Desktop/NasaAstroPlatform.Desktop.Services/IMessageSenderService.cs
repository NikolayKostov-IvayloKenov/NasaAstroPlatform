using System;

namespace NasaAstroPlatform.Desktop.Services
{
	public interface IMessageSenderService
	{
		string SessionId { get; set; }
		void SendMessage (string message, string sessionId);
	}
}
