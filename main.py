from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options

# Set Chrome options
options = Options()
options.add_argument('--headless')  # Optional: Run Chrome in headless mode
options.add_argument('--no-sandbox')
options.add_argument('--disable-dev-shm-usage')

# Path to ChromeDriver
chromedriver_path = '/usr/local/bin/chromedriver'

# Initialize WebDriver
service = Service(chromedriver_path)
driver = webdriver.Chrome(service=service, options=options)

try:
    # Open the local development server
    url = "http://localhost:5173/"
    driver.get(url)

    # Print the title of the loaded page
    print("Page title:", driver.title)

    # Perform any additional actions here (e.g., assertions, interactions)
finally:
    # Clean up and close the browser
    driver.quit()
