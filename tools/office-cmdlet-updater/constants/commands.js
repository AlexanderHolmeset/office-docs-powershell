module.exports = {
	GET_TEAM: 'Get-Team',
	GET_TEAMS_CREDENTIALS: '$credentials=Get-Credential',
	INSTALL_PS_GALLERY: 'Set-PSRepository -Name "PSGallery" -InstallationPolicy Trusted',
	INSTALL_PACKAGE_PROVIDER: 'Install-PackageProvider -Name NuGet -MinimumVersion 2.8.5.201 -Force',
	IMPORT_MICROSOFT_TEAM: 'Import-Module MicrosoftTeams',
	INSTALL_MICROSOFT_TEAM: 'Install-Module MicrosoftTeams -SkipPublisherCheck -Force',
	CONNECT_MICROSOFT_TEAM: 'Connect-MicrosoftTeams -Credential $cred',
	INSTALL_PLATYPS: 'Install-Module -Name platyPS -SkipPublisherCheck -Scope CurrentUser -Force',
	IMPORT_PLATYPS: 'Import-Module platyPS',
	UPDATE_MARKDOWN: 'Update-MarkdownHelp -Path "{}" -LogPath "{}" -Session $Session',
	SKYPE_ENABLE_WIN_RM: 'sc.exe start WinRM',
	SKYPE_INSTALL_LYNC_MODULE: 'Import-Module LyncOnlineConnector',
	SKYPE_INSTALL_MODULE: 'Import-Module SkypeOnlineConnector -Force',
	SKYPE_GET_CRED: '$cred = Get-Credential',
	SKYPE_CREATE_SESSION: '$session = New-CsOnlineSession -Credential $cred -Verbose',
	SKYPE_IMPORT_SESSION: 'Import-PSSession -Session $session -Verbose',
	SHAREPOINT_INSTALL_MODULE: 'Import-Module Microsoft.Online.SharePoint.PowerShell -DisableNameChecking',
	WHITEBOARD_INSTALL_MODULE: 'Install-Module -Name WhiteboardAdmin -Force',
	EXCHANGE_INSTALL_MODULE: 'Install-Module -Name ExchangeOnlineShell -Force',
	EXCHANGE_GET_CRED: '$UserCredential = Get-Credential',
	EXCHANGE_GET_SESSION: '$Session = New-PSSession -ConfigurationName Microsoft.Exchange -ConnectionUri https://outlook.office365.com/powershell-liveid/ -Credential $cred -Authentication Basic -AllowRedirection',
	EXCHANGE_SESSION_IMPORT: 'Import-PSSession $Session -DisableNameChecking',
	SET_LOGIN: '$Username = \'{}\'',
	SET_PASS: '$Password = \'{}\'',
	CONVERT_PASS_TO_SEC_STRING: '$SecureString = ConvertTo-SecureString -AsPlainText $Password -Force',
	CREAT_CRED: '$cred = New-Object -TypeName System.Management.Automation.PSCredential -ArgumentList $Username,$SecureString',
	STUFFHUB_INSTALL: 'Install-Module -Name MicrosoftStaffHub -Force'
};
